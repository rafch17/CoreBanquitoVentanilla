import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private searchClientApi = 'http://corebanquito-client.us-east-1.elasticbeanstalk.com/client/'; // URL del endpoint
  constructor(private http: HttpClient) { }
  searchAcount(clientNumber:string):Observable<any>{
    return this.http.get<any>(this.searchClientApi + clientNumber);
  }

}
