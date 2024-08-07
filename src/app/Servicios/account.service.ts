import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private searchAccountApi = 'https://corebanquito-account.us-east-1.elasticbeanstalk.com/accounts/by-unique-code/'; // URL del endpoint
  private transactionApi= "http://core-cobros-alb-538320160.us-east-1.elb.amazonaws.com/account-microservice/api/v1/account-transactions"
  private searchAccountApiTest = 'http://core-cobros-alb-538320160.us-east-1.elb.amazonaws.com/account-microservice/api/v1/accounts/'; // URL del endpoint

  // private searchAccountApi = 'http://corebanquito-account.us-east-1.elasticbeanstalk.com/accounts/by-unique-code/'; // URL del endpoint
  //private transactionApi= "http://corebanquito-account.us-east-1.elasticbeanstalk.com/account-transactions"
  constructor(private http: HttpClient) { }
  searchAcount(accountNumber:string):Observable<any>{
    return this.http.get<any>(this.searchAccountApiTest + accountNumber);
  }
  
  sendTransaction(transactionData:any):Observable<any>{
    return this.http.post<any>(this.transactionApi, transactionData);
  }

}
