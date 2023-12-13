import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibicionEncuestasRoutingModule } from './exhibicion-encuestas-routing.module';
import { ExhibicionEncuestasComponent } from './exhibicion-encuestas.component';
import { AuxiliarModule } from '../auxiliar/auxiliar.module';


@NgModule({
  declarations: [
    ExhibicionEncuestasComponent
  ],
  imports: [
    CommonModule,
    ExhibicionEncuestasRoutingModule,
    AuxiliarModule
  ]
})
export class ExhibicionEncuestasModule { }
