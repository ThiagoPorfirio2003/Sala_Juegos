import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado.component';
import { TecladoComponent } from 'src/app/components/teclado/teclado.component';
import { AuxiliarModule } from '../../auxiliar/auxiliar.module';



@NgModule({
  declarations: [
    AhorcadoComponent,
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    AuxiliarModule
  ]
})
export class AhorcadoModule { }
