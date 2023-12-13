import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IngresoEncuestaComponent } from '../../components/ingreso-encuesta/ingreso-encuesta.component';
import { TablaEncuestasComponent } from '../../components/tabla-encuestas/tabla-encuestas.component';
import { TecladoComponent } from 'src/app/components/teclado/teclado.component';



@NgModule({
  declarations: [
    IngresoEncuestaComponent,
    TablaEncuestasComponent,
    TecladoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    IngresoEncuestaComponent,
    TablaEncuestasComponent,
    TecladoComponent
  ]
})
export class AuxiliarModule { }
