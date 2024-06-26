import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


  private sendRecipientApi = 'https://corecobros-invoice.us-east-2.elasticbeanstalk.com/recipients'; // URL del endpoint

  private sendInvoiceApi = 'https://corecobros-invoice.us-east-2.elasticbeanstalk.com/invoices'; // URL del endpoint

  private sendTaxApi = 'https://corecobros-invoice.us-east-2.elasticbeanstalk.com/invoice-tax-details'; // URL del endpoint

  private getInvoiceBiIdentificationApi = 'https://corecobros-invoice.us-east-2.elasticbeanstalk.com/invoices/by-identification?identification='; // URL del endpoint



  constructor(private http: HttpClient) { }

  sendRecipient(rece: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.sendRecipientApi, rece, { headers });
  }
  sendTax(tax: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.sendTaxApi, tax, { headers });

  }
  sendInvoice(invoice: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.sendInvoiceApi, invoice, { headers });
  }
}
