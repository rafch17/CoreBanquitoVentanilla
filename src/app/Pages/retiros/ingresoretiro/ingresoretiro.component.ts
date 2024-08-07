import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Servicios/account.service';
import { ClientService } from 'src/app/Servicios/client.service';
import { CriptoService } from 'src/app/Servicios/cripto.service';
import { ErrorService } from 'src/app/Servicios/error.service';

@Component({
  selector: 'app-ingresoretiro',
  templateUrl: './ingresoretiro.component.html',
  styleUrls: ['./ingresoretiro.component.css']
})
export class IngresoretiroComponent implements OnInit {

  accountData: any;
  clientData: any;
  value: any;

  constructor(private router: Router, private accountService: AccountService, private clientService: ClientService, private errorService: ErrorService, private criptoService: CriptoService) { }

  ngOnInit() {
    this.accountData = history.state;
    console.log(this.accountData);
    this.chargeClientData();
  }
  makeDeposit() {
    //this.router.navigateByUrl("depositos/infodeposito")

    const depositoDTO: any = {
      
      accountId: 777,
      codeChannel: "CHA0078084",
      transactionType: "DEB",
      reference: "RETIROVENTANILLA",
      amount: this.value,
      creditorAccount: "2266977777",
      debitorAccount: this.accountData.codeInternalAccount,
      status: "PEN",
      comission: 0.00

    }


    //console.log(data);
    //this.router.navigateByUrl("depositos/infodeposito",{state: data});
    this.accountService.sendTransaction(depositoDTO).subscribe({
      next: (data) => {
        const dataTotal: any = {
          account: this.accountData,
          transaction: data,
          client: this.clientData
        }
        this.router.navigateByUrl("retiros/inforetiro", { state: dataTotal });

      },
      error: (err) => {
        this.errorService.notFound("Error", "El retiro no pudo ejecutarse")
        //this.router.navigateByUrl("depositos");
      }
    });

  }
  chargeClientData() {
    this.clientService.searchAcount(this.accountData.clientId).subscribe({
      next: (data) => {
        this.clientData = data;
        console.log(this.clientData);
        //console.log(data)
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        //this.router.navigateByUrl("depositos/ingresodeposito",{state: data});

      },
      error: (err) => {
        this.errorService.notFound("Error", "Cuenta no encontrada")
        this.router.navigateByUrl("retiros");
      }
    })
  }

}
