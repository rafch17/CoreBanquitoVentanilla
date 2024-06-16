import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private searchAccountApi = 'http://localhost:8080/accounts/by-unique-code?codeUniqueAccount='; // URL del endpoint
  constructor(private http: HttpClient) { }
  searchAcount(accountNumber:string):Observable<any>{
    return this.http.get<any>(this.searchAccountApi + accountNumber);
  }
  

}
