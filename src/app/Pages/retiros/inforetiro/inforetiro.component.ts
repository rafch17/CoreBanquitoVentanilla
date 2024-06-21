import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inforetiro',
  templateUrl: './inforetiro.component.html',
  styleUrls: ['./inforetiro.component.css']
})
export class InforetiroComponent implements OnInit {
  transactionData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.transactionData = history.state;
    console.log(this.transactionData);
    
  }
  makeNewDeposit(){
    this.router.navigateByUrl("retiros")
  }

}
