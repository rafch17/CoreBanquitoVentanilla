import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infodeposito',
  templateUrl: './infodeposito.component.html',
  styleUrls: ['./infodeposito.component.css']
})
export class InfodepositoComponent implements OnInit {
  transactionData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.transactionData = history.state;
    console.log(this.transactionData);
    
  }
  makeNewDeposit(){
    this.router.navigateByUrl("depositos")
  }

}
