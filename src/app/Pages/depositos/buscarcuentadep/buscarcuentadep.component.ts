import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from 'src/app/Servicios/account.service';
import { ErrorService } from 'src/app/Servicios/error.service';

@Component({
  selector: 'app-buscarcuentadep',
  templateUrl: './buscarcuentadep.component.html',
  styleUrls: ['./buscarcuentadep.component.css']
})
export class BuscarcuentadepComponent implements OnInit {
  account: any;
  codeUniqueAccount: string = ''; // Binding con el input
  searched: boolean = false; // Para controlar el mensaje de error

  constructor(private router: Router, private accountService: AccountService, private errorService:ErrorService) { }

  ngOnInit() {
  }
  searchClient(){
    this.router.navigateByUrl("depositos/ingresodeposito");
  }
  getAccount(): void {
    console.log(typeof this.codeUniqueAccount)
    this.accountService.searchAcount(this.codeUniqueAccount.toString()).subscribe({
      next: (data) => {
        //console.log(data)
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        this.router.navigateByUrl("depositos/ingresodeposito",{state: data});
      },
      error: (err) => {
        this.errorService.notFound("Error", "Datos de la cuenta no encontrados");
      }
    });
  }
}
