import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login'; // URL del endpoint

  constructor(private http: HttpClient) { }
  login(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { userName, password };

    return this.http.put(this.loginUrl, body, { headers }).pipe(
      map(response => {
        // Guardar el token en el localStorage
        localStorage.setItem('user', JSON.stringify(response));
        return response;
      }),
      catchError(error => {
        if (error.status === 400) {
          return throwError(() => new Error('Login fallido: credenciales incorrectas.'));
        } else {
          return throwError(() => new Error('Login fallido: error en el servidor.'));
        }
      })
    );
  }

  logout(): void {
    // Eliminar el token del localStorage
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  getUser(){
    return localStorage.getItem('user');
  }

  /*login(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {"userName":userName,"password":password}
    

    return this.http.put(this.loginUrl, body, { headers });

  }*/
}
