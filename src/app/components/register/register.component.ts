import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  public nombre : string;
  public apellido : string;
  public nombreUsuario : string;
  public mail : string;
  public clave : string;
  
  public formGroup : FormGroup;

  @Output() pasarDatosRegistroEvent : EventEmitter<any>;

  public constructor(private formBuilder : FormBuilder) 
  { 
    this.nombre = "";
    this.apellido = "";
    this.nombreUsuario = "";
    this.mail = "";
    this.clave= "";

    this.pasarDatosRegistroEvent = new EventEmitter<any>();

    this.formGroup = this.formBuilder.group(
      {
        nombre : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("[a-zA-Z ]*"),
          ]
        ],
        apellido : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("[a-zA-Z ]*"),
          ]
        ],
        nombreUsuario : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            this.hayEspacios
          ]
        ],
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
            Validators.minLength(6),
            Validators.required,
          ]
        ]
      }
    );
  }

  private hayEspacios(control: AbstractControl) : null | object
  {
    const valor = <string>control.value;
    const espacios = valor.includes(' ');

    if(espacios)
    {
      return {hayEspacios : true};
    }
    else
    {
      return null
    }
  }

  public pasarDatosRegistro() : void
  {
    let exito : boolean = this.formGroup.valid;
    let mensaje : string = "Hay al menos 1 condicion que no se cumplio";

    if(exito)
    {
      mensaje = "Todo bien";
    }

    let datosRegistro : any =
    {
      nombre : this.nombre.trim(),
      apellido : this.apellido.trim(),
      nombreUsuario : this.nombreUsuario,
      mail : this.mail.trim(),
      clave : this.clave,
      tipo : 1,
      exito : exito,
      mensaje : mensaje
    }

    this.pasarDatosRegistroEvent.emit(datosRegistro);
  }
}
