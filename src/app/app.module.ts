import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Shared/navbar/navbar.component';
import { SideBarComponent} from './Shared/sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './Pages/error/error.component';
import { ClientesComponent } from './Pages/clientes/inicio/clientes.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { CuentasComponent } from './Pages/cuentas/inicio/cuentas.component';
import { CrearComponent } from './Pages/clientes/crear/crear.component';
import { PersonaComponent } from './Pages/clientes/crear/persona/persona.component';
import { ConsultaComponent } from './Pages/clientes/consulta/consulta.component';
import { EditarComponent } from './Pages/clientes/editar/editar.component';
import { EstadoComponent } from './Pages/clientes/estado/estado.component';
import { LoginComponent } from './Pages/login/login.component';
import { CreditosComponent } from './Pages/creditos/creditos.component';
import { TablaAmortizacionComponent } from './Pages/tabla-amortizacion/tabla-amortizacion.component';
import { EmpresaComponent } from './Pages/clientes/crear/empresa/empresa.component';
import { ConsultaCuentaComponent } from './Pages/cuentas/consulta-cuenta/consulta-cuenta.component';
import { CrearCuentaComponent } from './Pages/cuentas/crear-cuenta/crear-cuenta.component';
import { BuscarcuentadepComponent } from './Pages/depositos/buscarcuentadep/buscarcuentadep.component';
import { BuscarcuentaretComponent } from './Pages/retiros/buscarcuentaret/buscarcuentaret.component';
import { IngresodepositoComponent } from './Pages/depositos/ingresodeposito/ingresodeposito.component';
import { InfodepositoComponent } from './Pages/depositos/infodeposito/infodeposito.component';
import { IngresoretiroComponent } from './Pages/retiros/ingresoretiro/ingresoretiro.component';
import { InforetiroComponent } from './Pages/retiros/inforetiro/inforetiro.component';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    UsuariosComponent,
    SideBarComponent,
    ClientesComponent,
    CuentasComponent,
    CrearComponent,
    PersonaComponent,
    ConsultaComponent,
    EditarComponent,
    EstadoComponent,
    LoginComponent,
    CreditosComponent,
    TablaAmortizacionComponent,
    EmpresaComponent,
    ConsultaCuentaComponent,
    CrearCuentaComponent,
    BuscarcuentadepComponent,
    BuscarcuentaretComponent,
    IngresodepositoComponent,
    InfodepositoComponent,
    IngresoretiroComponent,
    InforetiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
