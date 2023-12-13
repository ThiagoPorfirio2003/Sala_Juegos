import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { MayorMenorComponent } from './mayor-menor.component';
import { AuxiliarModule } from '../../auxiliar/auxiliar.module';


@NgModule({
  declarations: [
    MayorMenorComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    AuxiliarModule
  ]
})
export class MayorMenorModule { }
