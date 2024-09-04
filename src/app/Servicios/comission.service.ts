import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComissionService {

  private getReceibavleComissionByReceivableApi = 'https://corecobros-commission.us-east-2.elasticbeanstalk.com/receivablecommissions/receivable/'; // URL del endpoint
  
  private getcommisionById = 'http://localhost:7070/commission-microservice/api/v1/commissions/'; // URL del endpoint

  private sendPaymentComissionApi = 'https://corecobros-commission.us-east-2.elasticbeanstalk.com/paycommrecords'; // URL del endpoint


  constructor(private http: HttpClient) { }

  searchReceivableComissionBy(receId:any): Observable<any> {
    return this.http.get<any>(this.getReceibavleComissionByReceivableApi + receId);
  }
  searchComisionesById(id:string){
    return this.http.get<any>(this.getcommisionById + 'IPX0046735');
    
  }
  sendPaymentCommision(paymentnData:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.sendPaymentComissionApi, paymentnData, {headers});
  }
}
