import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { BuscarcuentadepComponent } from './Pages/depositos/buscarcuentadep/buscarcuentadep.component';
import { BuscarcuentaretComponent } from './Pages/retiros/buscarcuentaret/buscarcuentaret.component';
import { IngresodepositoComponent } from './Pages/depositos/ingresodeposito/ingresodeposito.component';
import { InfodepositoComponent } from './Pages/depositos/infodeposito/infodeposito.component';
import { IngresoretiroComponent } from './Pages/retiros/ingresoretiro/ingresoretiro.component';
import { InforetiroComponent } from './Pages/retiros/inforetiro/inforetiro.component';
import { LoginGuard } from './Guards/login.guard';
import { SearchRecaudoComponent } from './Pages/recaudos/search-recaudo/search-recaudo.component';
import { DatosRecaudoComponent } from './Pages/recaudos/datos-recaudo/datos-recaudo.component';
import { InfoRecaudoComponent } from './Pages/recaudos/info-recaudo/info-recaudo.component';
import { BuscarEmpresaComponent } from './Pages/recaudos/buscar-empresa/buscar-empresa.component';
import { SelectCompanyComponent } from './Pages/recaudos/select-company/select-company.component';

// const routes: Routes = [
//   { path:'' , component: LoginComponent },
//   { path:'login' , component: LoginComponent },
//   { path:'usuarios' , component : UsuariosComponent, canActivate: [loginGuard]},
//   { path:'clientes', component: ClientesComponent, canActivate: [loginGuard]},
//   { path: 'clientes/crear', component: CrearComponent, canActivate: [loginGuard] }, 
//   { path: 'clientes/crear/persona', component: PersonaComponent, canActivate: [loginGuard] }, 
//   { path: 'clientes/crear/empresa', component: EmpresaComponent, canActivate: [loginGuard] }, 
//   { path: 'clientes/consultas', component: ConsultaComponent, canActivate: [loginGuard] }, 
//   { path: 'clientes/editar', component: EditarComponent, canActivate: [loginGuard] }, 
//   { path: 'clientes/estado', component: EstadoComponent, canActivate: [loginGuard] },
//   { path:'cuentas', component: CuentasComponent, canActivate: [loginGuard]}, 
//   { path: 'cuentas/consultas', component: ConsultaCuentaComponent, canActivate: [loginGuard] }, 
//   { path: 'cuentas/crear', component: CrearCuentaComponent, canActivate: [loginGuard] }, 
//   { path:'creditos', component: CreditosComponent, canActivate: [loginGuard]}, 
//   { path:'creditos/amortizacion', component: TablaAmortizacionComponent}, 
//   { path: '**', redirectTo: '' }
// ];

/*const routes: Routes = [
  { path:'' , redirectTo:'login',pathMatch: 'full', },
  { path:'login' , component: LoginComponent, canActivate:[LoginGuard] },
  { path:'depositos', component: BuscarcuentadepComponent, canActivate: [AuthGuard]}, 
  { path:'depositos/ingresodeposito', component: IngresodepositoComponent, canActivate: [AuthGuard]}, 
  { path:'depositos/infodeposito', component: InfodepositoComponent, canActivate: [AuthGuard]}, 
  { path:'retiros', component: BuscarcuentaretComponent, canActivate: [AuthGuard]},
  { path:'retiros/ingresoretiro', component: IngresoretiroComponent, canActivate: [AuthGuard]}, 
  { path:'retiros/inforetiro', component: InforetiroComponent,canActivate: [AuthGuard]}, 
  { path:'recaudos', component: BuscarEmpresaComponent, canActivate: [AuthGuard]}, 
  { path:'recaudos/buscarecaudo', component: SearchRecaudoComponent, canActivate: [AuthGuard]}, 
  { path:'recaudos/datosrecaudo', component: DatosRecaudoComponent, canActivate: [AuthGuard]}, 
  { path:'recaudos/inforecaudo', component: InfoRecaudoComponent, canActivate: [AuthGuard]}, 
  { path:'recaudos/selectcompany', component: SelectCompanyComponent, canActivate: [AuthGuard]}, 

  { path: '**', redirectTo: 'login',pathMatch: 'full', }
  
];*/
const routes: Routes = [
  { path:'' , redirectTo:'login',pathMatch: 'full', },
  { path:'login' , component: LoginComponent,  },
  { path:'depositos', component: BuscarcuentadepComponent, }, 
  { path:'depositos/ingresodeposito', component: IngresodepositoComponent, }, 
  { path:'depositos/infodeposito', component: InfodepositoComponent, }, 
  { path:'retiros', component: BuscarcuentaretComponent, },
  { path:'retiros/ingresoretiro', component: IngresoretiroComponent, }, 
  { path:'retiros/inforetiro', component: InforetiroComponent,}, 
  { path:'recaudos', component: BuscarEmpresaComponent, }, 
  { path:'recaudos/buscarecaudo', component: SearchRecaudoComponent, }, 
  { path:'recaudos/datosrecaudo', component: DatosRecaudoComponent, }, 
  { path:'recaudos/inforecaudo', component: InfoRecaudoComponent, }, 
  { path:'recaudos/selectcompany', component: SelectCompanyComponent, }, 

  { path: '**', redirectTo: 'login',pathMatch: 'full', }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
