import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private searchAccountApi = 'http://localhost:8080/accounts/by-unique-code/'; // URL del endpoint
  private transactionApi= "http://localhost:8080/api/account-transactions"
  constructor(private http: HttpClient) { }
  searchAcount(accountNumber:string):Observable<any>{
    return this.http.get<any>(this.searchAccountApi + accountNumber);
  }
  
  sendTransaction(transactionData:any):Observable<any>{
    return this.http.post<any>(this.transactionApi, transactionData);
  }

}
