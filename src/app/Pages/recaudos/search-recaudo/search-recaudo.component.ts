import { Component, OnInit } from '@angular/core';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-search-recaudo',
  templateUrl: './search-recaudo.component.html',
  styleUrls: ['./search-recaudo.component.css']
})
export class SearchRecaudoComponent implements OnInit {

  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
  

}
