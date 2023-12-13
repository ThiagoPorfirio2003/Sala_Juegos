import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from 'src/app/components/menu-principal/menu-principal.component';
import { HomeComponent } from './home.component';
import { esAdminGuard } from 'src/app/guards/es-admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children:
    [
      { path: '', component: MenuPrincipalComponent },
      { path: 'chat', loadChildren: () => import('../chat/chat.module').then(m => m.ChatModule) },
      { path: 'ahorcado', loadChildren: () => import('../juegos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule) },
      { path: 'results', loadChildren: () => import('../resultados/resultados.module').then(m => m.ResultadosModule) },
      { path: 'encuestas', loadChildren: () => import('../exhibicion-encuestas/exhibicion-encuestas.module').then(m => m.ExhibicionEncuestasModule),
        canActivate: [esAdminGuard] },
      { path: 'mayorMenor', loadChildren: () => import('../juegos/mayor-menor/mayor-menor.module').then(m => m.MayorMenorModule) },
      { path: 'preguntados', loadChildren: () => import('../juegos/preguntados/preguntados.module').then(m => m.PreguntadosModule) },
      { path: 'FotosUnaPalabra', loadChildren: () => import('../juegos/fotos-una-palabra/fotos-una-palabra.module').then(m => m.FotosUnaPalabraModule) },
    ]
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
