import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent 
{
  public mail : string;
  public clave : string;

  public formGroup : FormGroup;
  @Output() pasarDatosInicioSesionEvent : EventEmitter<any>;

  public constructor(private formBuilder : FormBuilder) 
  { 
    this.mail="";
    this.clave="";
    this.pasarDatosInicioSesionEvent = new EventEmitter<any>();

    this.formGroup = this.formBuilder.group(
      {
        mail : 
        [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        clave : 
        [
          '',
          [
            Validators.required,
          ]
        ]
      }
    );
  }

  public pasarDatosInicioSesion()
  {
    let exito : boolean = this.formGroup.valid;
    let mensaje : string = "Hay al menos 1 condicion que no se cumplio";

    if(exito)
    {
      mensaje = "Todo bien";
    }

    let datosInicio : any =
    {
      mail : this.mail.trim(),
      clave : this.clave,
      exito : exito,
      mensaje : mensaje
    }

    this.pasarDatosInicioSesionEvent.emit(datosInicio);
  }

  public cargarDatosAuxiliares(mail : string, clave : string) : void
  {
    this.mail = mail;
    this.clave = clave;
  }
}
