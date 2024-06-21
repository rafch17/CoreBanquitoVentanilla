import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Servicios/account.service';
import { ErrorService } from 'src/app/Servicios/error.service';

@Component({
  selector: 'app-buscarcuentaret',
  templateUrl: './buscarcuentaret.component.html',
  styleUrls: ['./buscarcuentaret.component.css']
})
export class BuscarcuentaretComponent implements OnInit {

  account: any;
  codeUniqueAccount: string = ''; // Binding con el input
  searched: boolean = false; // Para controlar el mensaje de error

  constructor(private router: Router, private accountService: AccountService, private errorService: ErrorService) { }

  ngOnInit() {
  }
  searchClient() {
    this.router.navigateByUrl("retiros/ingresoretiro");
  }
  getAccount(): void {
    console.log(typeof this.codeUniqueAccount)
    this.accountService.searchAcount(this.codeUniqueAccount.toString()).subscribe({
      next: (data) => {
        //console.log(data)
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        this.router.navigateByUrl("retiros/ingresoretiro", { state: data });
      },
      error: (err) => {
        this.errorService.notFound("Error", "Datos de la cuenta no encontrados");
      }
    });
  }
}
