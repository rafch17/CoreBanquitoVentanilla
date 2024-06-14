import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Pages/error/error.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { ClientesComponent } from './Pages/clientes/inicio/clientes.component';
import { CuentasComponent } from './Pages/cuentas/inicio/cuentas.component';
import { CrearComponent } from './Pages/clientes/crear/crear.component';
import { PersonaComponent } from './Pages/clientes/crear/persona/persona.component';
import { EmpresaComponent } from './Pages/clientes/crear/empresa/empresa.component';

import { ConsultaComponent } from './Pages/clientes/consulta/consulta.component';
import { EditarComponent } from './Pages/clientes/editar/editar.component';
import { EstadoComponent } from './Pages/clientes/estado/estado.component';
import { LoginComponent } from './Pages/login/login.component';
import { CreditosComponent } from './Pages/creditos/creditos.component';
import { TablaAmortizacionComponent } from './Pages/tabla-amortizacion/tabla-amortizacion.component';
import { ConsultaCuentaComponent } from './Pages/cuentas/consulta-cuenta/consulta-cuenta.component';
import { CrearCuentaComponent } from './Pages/cuentas/crear-cuenta/crear-cuenta.component';
import { AuthGuard } from './Guards/auth.guard';
import { BuscarcuentadepComponent } from './Pages/depositos/buscarcuentadep/buscarcuentadep.component';
import { BuscarcuentaretComponent } from './Pages/retiros/buscarcuentaret/buscarcuentaret.component';
import { IngresodepositoComponent } from './Pages/depositos/ingresodeposito/ingresodeposito.component';
import { InfodepositoComponent } from './Pages/depositos/infodeposito/infodeposito.component';
import { IngresoretiroComponent } from './Pages/retiros/ingresoretiro/ingresoretiro.component';
import { InforetiroComponent } from './Pages/retiros/inforetiro/inforetiro.component';
import { LoginGuard } from './Guards/login.guard';

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

const routes: Routes = [
  { path:'' , redirectTo:'login',pathMatch: 'full', },
  { path:'login' , component: LoginComponent, canActivate:[LoginGuard] },
  //{ path:'usuarios' , component : UsuariosComponent, },
  //{ path:'clientes', component: ClientesComponent, },
  //{ path: 'clientes/crear', component: CrearComponent,  }, 
  //{ path: 'clientes/crear/persona', component: PersonaComponent,  }, 
  //{ path: 'clientes/crear/empresa', component: EmpresaComponent,  }, 
  //{ path: 'clientes/consultas', component: ConsultaComponent,  }, 
  //{ path: 'clientes/editar', component: EditarComponent,  }, 
  //{ path: 'clientes/estado', component: EstadoComponent,  },
  //{ path:'cuentas', component: CuentasComponent, }, 
  //{ path: 'cuentas/consultas', component: ConsultaCuentaComponent,  }, 
  //{ path: 'cuentas/crear', component: CrearCuentaComponent,  }, 
  //{ path:'creditos', component: CreditosComponent, canActivate: [AuthGuard]}, 
  //{ path:'creditos/amortizacion', component: TablaAmortizacionComponent, canActivate: [AuthGuard]}, 
  { path:'depositos', component: BuscarcuentadepComponent, canActivate: [AuthGuard]}, 
  { path:'depositos/ingresodeposito', component: IngresodepositoComponent, canActivate: [AuthGuard]}, 
  { path:'depositos/infodeposito', component: InfodepositoComponent, canActivate: [AuthGuard]}, 
  { path:'retiros', component: BuscarcuentaretComponent, canActivate: [AuthGuard]},
  { path:'retiros/ingresoretiro', component: IngresoretiroComponent, canActivate: [AuthGuard]}, 
  { path:'retiros/inforetiro', component: InforetiroComponent,canActivate: [AuthGuard]}, 
  { path:'recuados', component: TablaAmortizacionComponent, canActivate: [AuthGuard]}, 
  { path: '**', redirectTo: 'login',pathMatch: 'full', }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
