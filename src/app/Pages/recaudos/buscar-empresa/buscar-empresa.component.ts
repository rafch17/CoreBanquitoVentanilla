import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/Servicios/error.service';
import { RecaudosService } from 'src/app/Servicios/recaudos.service';

@Component({
  selector: 'app-buscar-empresa',
  templateUrl: './buscar-empresa.component.html',
  styleUrls: ['./buscar-empresa.component.css']
})
export class BuscarEmpresaComponent implements OnInit {
  companyName:any;

  constructor(private errorService:ErrorService, private recaudosService:RecaudosService, private router:Router) { }

  ngOnInit() {
  }

  getCompany(){
    console.log(this.companyName.toString().toUpperCase())
    this.recaudosService.searchCompanyByName(this.companyName.toString().toUpperCase()).subscribe({
      next: (data) => {
        //console.log(data)
        //this.account = data;
        //this.searched = true; // Indica que se ha realizado una búsqueda
        if(data.length==0){
          this.errorService.notFound("Error", "Empresa no encontrada");

        }else{
          this.router.navigateByUrl("recaudos/selectcompany", { state: data });
        }
      },
      error: (err) => {
        this.errorService.notFound("Error", "Empresa no encontrada");
      }
    });
  }

}
