import { Component } from '@angular/core';
import { onSnapshot, doc } from 'firebase/firestore';
import { Mensaje } from 'src/app/clases/mensaje';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent 
{
  public listaMensajes : Array<Mensaje>;
  public textoActual : string;
  private suscripcionMensajes! : Subscription

  public constructor(private servicioDB : DataBaseService, public servicioUsuario : UsuarioService)
  {
    this.listaMensajes = new Array<Mensaje>();
    this.textoActual = "";
  }

  ngOnInit() : void
  {
    this.cargarMensajes();
  }

  ngOnDestroy() : void
  {
    this.suscripcionMensajes.unsubscribe();
  }

  private cargarMensajes() : void
  {
    this.suscripcionMensajes = this.servicioDB.MensajesCollectionData
    .subscribe((mensajesLeidos : Array<any>)=>
    {
      const mensajesTraidos : Array<Mensaje> = new Array<Mensaje>();

      mensajesLeidos.forEach((mensaje)=>
      {
        mensajesTraidos.push(new Mensaje(mensaje['texto'], mensaje['nombreUsuarioEmisor'], new Date(mensaje['fechaEmision'].seconds * 1000)));
      })

      this.listaMensajes = mensajesTraidos.sort((mUno : Mensaje, mDos : Mensaje)=>
      {return mUno.FechaEmisionDate.getTime() - mDos.FechaEmisionDate.getTime()})
    })
  }

  public enviarMensaje() : void
  {
    if(this.textoActual != "")
    {
      this.servicioDB.agregarMensaje(new Mensaje(this.textoActual, this.servicioUsuario.usuarioLogueado.NombreUsuario,
        new Date()));
        this.textoActual = "";
    }
  }
}
