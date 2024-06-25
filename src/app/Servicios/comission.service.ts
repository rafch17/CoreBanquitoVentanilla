import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComissionService {

  private getReceibavleComissionByReceivableApi = 'https://corecobros-commission.us-east-2.elasticbeanstalk.com/receivablecommissions/receivable/'; // URL del endpoint
  
  private getcommisionById = 'https://corecobros-commission.us-east-2.elasticbeanstalk.com/commissions/'; // URL del endpoint

  constructor(private http: HttpClient) { }

  searchReceivableComissionBy(receId:any): Observable<any> {
    return this.http.get<any>(this.getReceibavleComissionByReceivableApi + receId);
  }
  searchComisionesById(id:string){
    return this.http.get<any>(this.getcommisionById + id);
    
  }

}
