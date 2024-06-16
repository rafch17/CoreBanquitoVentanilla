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

  user :any;

  constructor( private flujoDatosService: FlujoDatosService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(){
    let user:any;
    user =  this.authService.getUser();
    this.user=JSON.parse(user)
    //console.log( JSON.parse(this.user));
  }
  logout() {
    this.authService.logout();
    
    console.log('Logout exitoso');
    this.router.navigate([""]);
  }
}
