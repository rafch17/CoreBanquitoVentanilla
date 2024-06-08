import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infodeposito',
  templateUrl: './infodeposito.component.html',
  styleUrls: ['./infodeposito.component.css']
})
export class InfodepositoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  makeNewDeposit(){
    this.router.navigateByUrl("depositos")
  }

}
