import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideBarComponent } from './Shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './Pages/error/error.component';

import { LoginComponent } from './Pages/login/login.component';
import { BuscarcuentadepComponent } from './Pages/depositos/buscarcuentadep/buscarcuentadep.component';
import { BuscarcuentaretComponent } from './Pages/retiros/buscarcuentaret/buscarcuentaret.component';
import { IngresodepositoComponent } from './Pages/depositos/ingresodeposito/ingresodeposito.component';
import { InfodepositoComponent } from './Pages/depositos/infodeposito/infodeposito.component';
import { IngresoretiroComponent } from './Pages/retiros/ingresoretiro/ingresoretiro.component';
import { InforetiroComponent } from './Pages/retiros/inforetiro/inforetiro.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { SearchRecaudoComponent } from './Pages/recaudos/search-recaudo/search-recaudo.component';
import { DatosRecaudoComponent } from './Pages/recaudos/datos-recaudo/datos-recaudo.component';
import { InfoRecaudoComponent } from './Pages/recaudos/info-recaudo/info-recaudo.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { BuscarEmpresaComponent } from './Pages/recaudos/buscar-empresa/buscar-empresa.component';
import { SelectCompanyComponent } from './Pages/recaudos/select-company/select-company.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SideBarComponent,
    LoginComponent,
    BuscarcuentadepComponent,
    BuscarcuentaretComponent,
    IngresodepositoComponent,
    InfodepositoComponent,
    IngresoretiroComponent,
    InforetiroComponent,
    SearchRecaudoComponent,
    DatosRecaudoComponent,
    InfoRecaudoComponent,
    BuscarEmpresaComponent,
    SelectCompanyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
    AutoCompleteModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
