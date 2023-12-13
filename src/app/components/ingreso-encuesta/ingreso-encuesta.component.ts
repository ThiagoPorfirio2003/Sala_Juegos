import { Component,EventEmitter,Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Encuesta } from 'src/app/clases/encuesta';
import { EnumIdJuegos } from 'src/app/clases/enumerados';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-ingreso-encuesta',
  templateUrl: './ingreso-encuesta.component.html',
  styleUrls: ['./ingreso-encuesta.component.css']
})
export class IngresoEncuestaComponent 
{
  public formulario : FormGroup;
  @Output() pasarEncuestaEvent : EventEmitter<Encuesta>;
  @Input() idJuego : EnumIdJuegos;
  @Input() nombreUsuario : string;

  constructor(public servicioFormBuilder : FormBuilder, private servicioAlerta : AlertasService)
  {
    this.pasarEncuestaEvent = new EventEmitter<Encuesta>();
    this.idJuego = EnumIdJuegos.No_existe;
    this.nombreUsuario = '';
    this.formulario = this.servicioFormBuilder.group(
    {
      nombreEncuestado : 
      [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern("[a-zA-Z ]*"),
        ]
      ],
      apellidoEncuestado : 
      [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern("[a-zA-Z ]*"),
        ]
      ],
      edadEncuestado :
      [
        '',
        [
          Validators.min(19),
          Validators.max(98),
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]
      ],
      numeroTelefono:
      [
        '',
        [
          Validators.maxLength(10),
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]
      ],
      queTanDivertidoEs : 
      [
        0,
        []
      ],
      calidadDeLosControles :
      [
        50,
        []
      ],
      recomendariasElJuego:
      [
        false,
        []
      ]
    })
  }

  public pasarDatos()
  {
    let datosLeidos : any;

    if(this.formulario.valid)
    {
      datosLeidos = this.formulario.value;

      if(datosLeidos.queTanDivertidoEs != 0)
      {
        datosLeidos.idJuego = this.idJuego;
        datosLeidos.nombreUsuario = this.nombreUsuario;
        datosLeidos['queTanDivertidoEs'] = parseInt(datosLeidos['queTanDivertidoEs']);
        datosLeidos['edadEncuestado'] = parseInt(datosLeidos['edadEncuestado']);
        datosLeidos['numeroTelefono'] = parseInt(datosLeidos['numeroTelefono']);

        this.pasarEncuestaEvent.emit(Encuesta.armar(datosLeidos))
      }
      else
      {
        this.servicioAlerta.alertaError('Falto evaluar que tan divertido es el juego')
      }
    }
    else
    {
      this.servicioAlerta.alertaError('Hay datos auscentes o que no cumplen las condiciones')
    }
  }
}
