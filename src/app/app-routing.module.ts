import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { activateEstaLogueadoGuard } from './guards/activate-esta-logueado.guard';
import { ERROR404Component } from './components/error404/error404.component';

const routes: Routes = 
[
  {path: "inicio", component: InicioComponent},
  {path: "quienSoy", component: QuienSoyComponent},
  { path: 'home', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule),
  canActivate: [activateEstaLogueadoGuard]},
  {path: '', redirectTo: "inicio", pathMatch: "full"},
  {path: '**', component: ERROR404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
