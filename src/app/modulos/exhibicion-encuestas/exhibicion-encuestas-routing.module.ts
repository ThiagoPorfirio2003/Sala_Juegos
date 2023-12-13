import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibicionEncuestasComponent } from './exhibicion-encuestas.component';

const routes: Routes = [{ path: '', component: ExhibicionEncuestasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibicionEncuestasRoutingModule { }
