import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inforetiro',
  templateUrl: './inforetiro.component.html',
  styleUrls: ['./inforetiro.component.css']
})
export class InforetiroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  makeNewDebit(){
    this.router.navigateByUrl("retiros")
  }

}
