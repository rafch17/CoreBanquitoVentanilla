import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public notFound(title:string,text:string) {

    return Swal.fire({
      icon: "error",
      title: title,
      text: text,
    });
  }


}
