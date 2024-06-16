import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientService } from 'src/app/Servicios/client.service';
import { ErrorService } from 'src/app/Servicios/error.service';

@Component({
  selector: 'app-ingresodeposito',
  templateUrl: './ingresodeposito.component.html',
  styleUrls: ['./ingresodeposito.component.css']
})
export class IngresodepositoComponent implements OnInit {
  accountData:any;
  clientData:any;
  value:any;

  constructor(private router:Router, private clientService:ClientService, private errorService:ErrorService) { }

  ngOnInit() {
    this.accountData = history.state;
    console.log(this.accountData);
    this.chargeClientData();
  }
  makeDeposit(){
    //this.router.navigateByUrl("depositos/infodeposito")
    console.log(this.value);
  }
  chargeClientData(){
    this.clientService.searchAcount(this.accountData.clientId).subscribe({
      next: (data) => {
        this.clientData=data;
        console.log(this.clientData);
        //console.log(data)
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        //this.router.navigateByUrl("depositos/ingresodeposito",{state: data});

      },
      error: (err) => {
        this.errorService.notFound("Error","Cuenta no encontrada")
        this.router.navigateByUrl("depositos");
      }
    })
  }
}
