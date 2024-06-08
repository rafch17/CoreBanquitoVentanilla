import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buscarcuentadep',
  templateUrl: './buscarcuentadep.component.html',
  styleUrls: ['./buscarcuentadep.component.css']
})
export class BuscarcuentadepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  searchClient(){
    this.router.navigateByUrl("depositos/ingresodeposito")
  }
}
