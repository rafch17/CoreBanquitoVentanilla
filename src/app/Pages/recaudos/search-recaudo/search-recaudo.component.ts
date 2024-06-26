import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClientService } from 'src/app/Servicios/client.service';
import { ErrorService } from 'src/app/Servicios/error.service';
import { RecaudosService } from 'src/app/Servicios/recaudos.service';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-search-recaudo',
  templateUrl: './search-recaudo.component.html',
  styleUrls: ['./search-recaudo.component.css']
})
export class SearchRecaudoComponent implements OnInit {

  
  companyData:any;
  contrapartida:any;
  //client

  constructor(private clientService: ClientService, private router:Router, private recaudoService:RecaudosService, private errorService:ErrorService){

  }

  ngOnInit() {
    console.log(history.state);
    this.companyData=history.state;
  }
  
  getItem(): void {
    console.log(this.companyData.id+this.contrapartida.toString())
    this.recaudoService.getItemOrder(this.companyData.id,this.contrapartida.toString()).subscribe({
      next: (data) => {
        if (data.length==0) {
          this.errorService.notFound("Error", "No existe el registro de recaudo");
          
        }else{
          
          const dataTotal :any = {
            company:this.companyData,
            itemData: data,
          }
          console.log(dataTotal.itemData[0].status);
          if (dataTotal.itemData[0].status==="PEN") {
            console.log(dataTotal)
            this.router.navigateByUrl("recaudos/datosrecaudo", { state: dataTotal });
  
          }else{
            this.errorService.notFound("Error", "El registro está pagado");

          }
        }
        
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        //this.router.navigateByUrl("depositos/ingresodeposito", { state: data });
      },
      error: (err) => {
        this.errorService.notFound("Error", "No existe el registro de recaudo");
      }
    });
  }

}
