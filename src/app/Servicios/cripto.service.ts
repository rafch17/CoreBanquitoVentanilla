import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  constructor() { }
  generateUniqueCode(accountId: string, codeChannel: string, des: String): string {
    const currentDate = new Date();
    const formattedDate = this.formatDate(currentDate); // Formatea la fecha


    // Concatena todo
    const concatenatedString = formattedDate + accountId + codeChannel + des;

    // Hashea para obtener una cadena de 32 caracteres
    const hashedCode = CryptoJS.SHA256(concatenatedString).toString(CryptoJS.enc.Hex).slice(0, 32);

    return hashedCode;
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
  }

}
