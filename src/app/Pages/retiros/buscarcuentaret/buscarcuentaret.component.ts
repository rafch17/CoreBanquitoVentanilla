import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarcuentaret',
  templateUrl: './buscarcuentaret.component.html',
  styleUrls: ['./buscarcuentaret.component.css']
})
export class BuscarcuentaretComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  searchClient(){
    this.router.navigateByUrl("retiros/ingresoretiro")
  }
}
