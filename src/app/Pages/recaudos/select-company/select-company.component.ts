import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Servicios/account.service';
import { ClientService } from 'src/app/Servicios/client.service';
import { CriptoService } from 'src/app/Servicios/cripto.service';
import { ErrorService } from 'src/app/Servicios/error.service';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css']
})
export class SelectCompanyComponent implements OnInit {

  accountData: any;
  companiesData:any[]=[];
  value: any;

  constructor(private router: Router,private accountService:AccountService, private clientService: ClientService, private errorService: ErrorService, private criptoService:CriptoService) { }

  ngOnInit() {
    
    this.companiesData = Object.keys(history.state)
      .filter(key => !isNaN(Number(key))) // Filtra solo las claves numéricas
      .map(key => history.state[key]); // Convierte a un arreglo de valores
    console.log(this.companiesData);
  }

  selectCompany(company:any) {
    //this.router.navigateByUrl("depositos/infodeposito")
    
    /*const depositoDTO: any = {
      accountId: this.accountData.id,
      codeChannel: "0003",
      uniqueKey: this.criptoService.generateUniqueCode(this.accountData.id,"0003","DEPVENTANILLA"),
      transactionType: "CRE",
      transactionSubtype: "DEPOSIT",
      reference: "DEPOSITOVENTANILLA",
      ammount: this.value,
      creditorAccount: this.accountData.codeUniqueAccount,
      debitorAccount: "",
      creationDate: new Date(),
      applyTax: false,
      parentTransactionKey: "",
      state: "POS"
    }
    
    
   //console.log(data);
    //this.router.navigateByUrl("depositos/infodeposito",{state: data});
    this.accountService.sendTransaction(depositoDTO).subscribe({
      next: (data) => {
        const dataTotal :any = {
          account:this.accountData,
          transaction: data,
          client: this.companyData
        }
        this.router.navigateByUrl("depositos/infodeposito",{state: dataTotal});

      },
      error: (err) => {
        this.errorService.notFound("Error", "El deposito no pudo ejecutarse")
        //this.router.navigateByUrl("depositos");
      }
    });*/
    console.log(company);
    this.router.navigateByUrl("recaudos/buscarecaudo",{state: company});

    
  }
  

}
