import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ingresodeposito',
  templateUrl: './ingresodeposito.component.html',
  styleUrls: ['./ingresodeposito.component.css']
})
export class IngresodepositoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  makeDeposit(){
    this.router.navigateByUrl("depositos/infodeposito")
  }
}
