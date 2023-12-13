import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { TablaResultadosComponent } from 'src/app/components/tabla-resultados/tabla-resultados.component';


@NgModule({
  declarations: [
    ResultadosComponent,
    TablaResultadosComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule
  ]
})
export class ResultadosModule { }
