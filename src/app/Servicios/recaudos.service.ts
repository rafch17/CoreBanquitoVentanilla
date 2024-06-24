import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaudosService {

  private getCompanyApi = 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com/company/search?namePattern='; // URL del endpoint
  private transactionApi = "http://localhost:8080/api/account-transactions"

  constructor(private http: HttpClient) { }

  searchCompanyByName(companyName: string): Observable<any> {
    return this.http.get<any>(this.getCompanyApi + companyName);
  }

  sendTransaction(transactionData: any): Observable<any> {
    return this.http.post<any>(this.transactionApi, transactionData);
  }


}
