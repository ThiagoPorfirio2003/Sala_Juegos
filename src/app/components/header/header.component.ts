import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavegacionService } from '../../servicios/navegacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { error } from 'jquery';
import { AlertasService } from '../../servicios/alertas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{

 // @Output() quiereRegistrarseEvento : EventEmitter<boolean>;

  public constructor(public servicioUsuario : UsuarioService, private servicioNavegacion : NavegacionService, private servicioDB : DataBaseService,
    private servicioAlerta : AlertasService)
  {

  //  this.quiereRegistrarseEvento = new EventEmitter<boolean>()
  }

  public cambiarQuiereRegistrarse(quiereLoguearse : boolean) : void
  {
    this.servicioUsuario.quiereRegistrarse = quiereLoguearse;

    if(this.servicioNavegacion.RutaActual != '/inicio')
    {
      this.servicioNavegacion.cambiarRuta('/inicio');
    }
  }

  public preguntarCerrarSesion() : void
  {
    this.servicioAlerta.alertaAceptarCancelar('¿Seguro que quiere cerrar la sesion?', 0, 'Te voy a extrañar',
    "Hasta la proxima", "Mejor me quedo", true)
    .then((respuesta)=>
    {
      if(respuesta.isConfirmed)
      {
        this.cerrarSesion();
      }
    })
    .catch()
  }

  private cerrarSesion() : void
  {
    this.servicioDB.cerrarSesion()
    .then((respuesta) => 
    {
      this.servicioUsuario.desLoguearUsuario();
      this.servicioNavegacion.cambiarRuta('/inicio');
    })
    .catch(fracaso => console.log(fracaso));
  }
}
