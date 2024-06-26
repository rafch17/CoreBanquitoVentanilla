import { Component, OnInit } from '@angular/core';
import { ComissionService } from 'src/app/Servicios/comission.service';

@Component({
  selector: 'app-info-recaudo',
  templateUrl: './info-recaudo.component.html',
  styleUrls: ['./info-recaudo.component.css']
})
export class InfoRecaudoComponent implements OnInit {

  data:any;
  comission:any;
  constructor(private commisionService:ComissionService) { }

  ngOnInit() {
    this.data = history.state;
    console.log(this.data)
    this.getComission();
  }
  getComission() {
    this.commisionService.searchComisionesById(this.data.paycom.commissionId).subscribe((data)=>{
      this.comission=data;
      console.log(this.comission);
    })
  }

}
