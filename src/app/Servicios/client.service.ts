import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private searchClientApi = 'https://m4b60phktl.execute-api.us-east-1.amazonaws.com/banquito/client-microservice/api/v1/clients/'; // URL del endpoint
  constructor(private http: HttpClient) { }
  searchAcount(clientNumber:string):Observable<any>{
    return this.http.get<any>(this.searchClientApi + clientNumber);
  }

}
