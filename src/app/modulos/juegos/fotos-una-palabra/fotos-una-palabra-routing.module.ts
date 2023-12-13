import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosUnaPalabraComponent } from './fotos-una-palabra.component';

const routes: Routes = [{ path: '', component: FotosUnaPalabraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotosUnaPalabraRoutingModule { }
