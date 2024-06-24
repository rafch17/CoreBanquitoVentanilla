import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaudosService {

  private getCompanyApi = 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com/company/search?namePattern='; // URL del endpoint
  private getItem = 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com/'; // URL del endpoint
  private getItemId = 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com/order-items/'; // URL del endpoint
  private transactionApi = "http://localhost:8080/api/account-transactions"
  private getOrderApi="http://corecobros-receivables.us-east-1.elasticbeanstalk.com/orders/";
  private getReceivableApi="http://corecobros-receivables.us-east-1.elasticbeanstalk.com/receivables/";
  private getAccountCompanyApi = 'http://corecobros-receivables.us-east-1.elasticbeanstalk.com/accounts/company/'; // URL del endpoint
  private sendPaymentApi='http://corecobros-receivables.us-east-1.elasticbeanstalk.com/payment-records'


  constructor(private http: HttpClient) { }

  searchCompanyByName(companyName: string): Observable<any> {
    return this.http.get<any>(this.getCompanyApi + companyName);
  }
  getItemOrder(companyId:string,contrapartida:string): Observable<any> {
    return this.http.get<any>(this.getItem+'order-items/search?counterpart='+contrapartida+'&companyId='+companyId);
  }
  getOrderById(order:string): Observable<any> {
    return this.http.get<any>(this.getOrderApi+order);
  }
  getReceivableById(receivable:string): Observable<any> {
    return this.http.get<any>(this.getReceivableApi+receivable);
  }
  getItemOrderbyId(itemId:string): Observable<any> {
    return this.http.get<any>(this.getItemId+itemId);
  }
  getAccountByCompanyId(companyId:string): Observable<any> {
    return this.http.get<any>(this.getAccountCompanyApi+companyId);
  }
  sendPayment(paymentnData:any):Observable<any>{
    return this.http.post<any>(this.sendPaymentApi, paymentnData);
  }
  setOerderItem(id:string, estado:string):Observable<any>{
    return this.http.put<any>("http://corecobros-receivables.us-east-1.elasticbeanstalk.com/order-items/"+id+"/status?status="+estado,null)
  }

  /*sendItemOrder(companyId:string,contrapartida:string): Observable<any> {
    return this.http.post<any>(this.sendItem, transactionData);
  }*/


}
