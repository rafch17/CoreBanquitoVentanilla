import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { FlujoDatosService } from 'src/app/Servicios/flujo-datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: string = "";

  constructor( private flujoDatosService: FlujoDatosService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatosUsuario();
    const usuarioFromLocalStorage = localStorage.getItem("user");
    if (usuarioFromLocalStorage !== null) {
      this.usuario = usuarioFromLocalStorage;
    } else {
      this.usuario = "";
    }
  }

  cargarDatosUsuario(){
    this.usuario = <any> this.flujoDatosService.getUsuarioLogin();
  }
  logout() {
    this.authService.logout();
    
    console.log('Logout exitoso');
    this.router.navigate([""]);
  }
}
