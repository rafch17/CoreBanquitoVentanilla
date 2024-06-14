import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/depositos']).then();
    }
    
  }
  
}
