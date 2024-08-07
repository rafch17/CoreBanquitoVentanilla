import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private searchClientApi = 'http://core-cobros-alb-538320160.us-east-1.elb.amazonaws.com/client-microservice/api/v1/clients/'; // URL del endpoint
  constructor(private http: HttpClient) { }
  searchAcount(clientNumber:string):Observable<any>{
    return this.http.get<any>(this.searchClientApi + clientNumber);
  }

}
