import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosUnaPalabraRoutingModule } from './fotos-una-palabra-routing.module';
import { FotosUnaPalabraComponent } from './fotos-una-palabra.component';
import { AuxiliarModule } from '../../auxiliar/auxiliar.module';


@NgModule({
  declarations: [
    FotosUnaPalabraComponent
  ],
  imports: [
    CommonModule,
    FotosUnaPalabraRoutingModule,
    AuxiliarModule
  ]
})
export class FotosUnaPalabraModule { }
