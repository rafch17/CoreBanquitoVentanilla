import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresoretiro',
  templateUrl: './ingresoretiro.component.html',
  styleUrls: ['./ingresoretiro.component.css']
})
export class IngresoretiroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  makeDeposit(){
    this.router.navigateByUrl("retiros/inforetiro")
  }

}
