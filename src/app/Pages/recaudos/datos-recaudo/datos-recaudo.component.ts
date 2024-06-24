import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Servicios/client.service';
import { ErrorService } from 'src/app/Servicios/error.service';
import { RecaudosService } from 'src/app/Servicios/recaudos.service';

@Component({
  selector: 'app-datos-recaudo',
  templateUrl: './datos-recaudo.component.html',
  styleUrls: ['./datos-recaudo.component.css']
})
export class DatosRecaudoComponent implements OnInit {
  companyData:any;
  contrapartida:any;


  constructor(private clientService: ClientService, private router:Router, private recaudoService:RecaudosService, private errorService:ErrorService){

  }

  ngOnInit() {
    console.log(history.state);
    this.companyData=history.state.company;
    this.contrapartida=history.state.itemData[0];

  }

}
