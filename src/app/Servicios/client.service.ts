import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private searchClientApi = 'https://client-corebanquito-production.up.railway.app/client-microservice/api/v1/clients/'; // URL del endpoint
  constructor(private http: HttpClient) { }
  searchAcount(clientNumber:string):Observable<any>{
    return this.http.get<any>(this.searchClientApi + clientNumber);
  }

}
