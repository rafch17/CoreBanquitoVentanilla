import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/Servicios/auth.service';
import { ErrorService } from 'src/app/Servicios/error.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credenciales = {
    "usuario": "",
    "clave": "",
    "tipo" : "BackOffice"
  }
  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  primeraVisita = true;
  accesoValidacion = false;

  constructor( private router: Router, private authService: AuthService, private errorService:ErrorService){}

  ngOnInit(): void {
    localStorage.clear();
  }

  loginUser(){
    //this.router.navigate(["/clientes"]);
    /*this.authService.login(this.userName, this.password).subscribe(
      (response) => {
        // Redirigir a la página principal u otra acción tras un login exitoso
        //this.router.navigate(['/dashboard']);
        console.log(response);
      },
      (error) => {
        // Manejar errores de autenticación
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );*/
    this.authService.login(this.userName, this.password).subscribe({
      next: (response) => {
        // Redirigir al usuario o realizar alguna acción adicional
        console.log(response);
        this.router.navigate(["/depositos"]).then();
        if (response && typeof response.subscribe === 'function') {
          this.errorService.notFound("Error", "Credenciales Inválidas")
          
        }
      },
      error: (err) => {
        this.errorService.notFound("Error", "Credenciales Inválidas")
      }
    });
  }
}
