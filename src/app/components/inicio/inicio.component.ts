import { Component } from '@angular/core';
import { EnumIdJuegos } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { Usuario } from 'src/app/clases/usuario';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { NavegacionService } from 'src/app/servicios/navegacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent 
{
  private usuariosGuardados : Array<any>;
  private suscripcionUsuarios : any;

  public constructor(private servicioDB : DataBaseService,
    public servicioUsuario : UsuarioService, private servicioNavegacion : NavegacionService,private servicioAlerta : AlertasService)
  {
    this.usuariosGuardados = new Array<any>();
  }

  ngOnInit() : void
  {
    this.cargarUsuarios();
  }

  ngOnDestroy()
  {
    this.suscripcionUsuarios.unsubscribe()
  }

  private cargarUsuarios() : void
  {
    this.suscripcionUsuarios = this.servicioDB.UsuariosCollectionData.subscribe((usuariosLeidos) =>
    this.usuariosGuardados = usuariosLeidos as Array<any>)
  }

  private guardarNuevasEstadisticas(usuario : Usuario) : void
  {
    let juegos : Array<EnumIdJuegos> = 
    [
      EnumIdJuegos.Ahorcado,
      EnumIdJuegos.Mayor_o_menor,
      EnumIdJuegos.Preguntados,
      EnumIdJuegos.Fotos_una_palabra
    ]

    juegos.forEach((juego)=>
    {
      this.servicioDB.agregarEstadistica(
        UsuarioEstadistica.crearEstadisticaNuevoUsuario('',usuario.Id, usuario.NombreUsuario, juego))
    })
  }

  private iniciarSesion(usuario : Usuario) : void
  {
 //   this.guardarNuevasEstadisticas(usuario);
    this.servicioUsuario.loguearUsuario(usuario);
    this.servicioDB.agregarLog(usuario.NombreUsuario, new Date());
    this.servicioNavegacion.cambiarRuta("/home");
  }

  public autenticarDatos({mail, clave, exito, mensaje} : any)
  {
    if(exito)
    {
      this.servicioDB.iniciarSesion({mail, clave})
      .then((exito)=>
      {
        this.servicioDB.getUsuarioRef(exito.user.uid)
        .then((docUsuario)=>
        {
           let usuarioLeido = docUsuario.data();
          if(usuarioLeido != undefined)
          {
            this.iniciarSesion(new Usuario(usuarioLeido['id'], usuarioLeido['nombre'], 
            usuarioLeido['apellido'], usuarioLeido['nombreUsuario'], usuarioLeido['mail'], 
            usuarioLeido['fechaCreacion'], usuarioLeido['tipo']));
          }
        })
        .catch(error=> console.log(error))
      }
      )
      .catch((fracaso)=>
      {
        this.servicioAlerta.alertaError(fracaso.code);
      });
    }
    else
    {
      this.servicioAlerta.alertaError(mensaje);
    }
    
  }

  public registrarUsuario({nombre, apellido, nombreUsuario, mail, clave, tipo, exito, mensaje} : any) : void
  {
    let datosValidados : any;

    if(exito)
    {
      datosValidados = this.validarNombreUsuarioYMailUnicos(nombreUsuario,mail);
    
      if(datosValidados.exito)
      {
        this.servicioDB.crearUsuario({mail,clave})
        .then((exito)=>
        {
          let usuarioNuevo : Usuario = new Usuario(exito.user.uid,nombre,apellido, nombreUsuario, mail, new Date(), tipo)
          this.servicioDB.agregarDatosUsuario(usuarioNuevo)
          .then((exito)=>
          {
            this.guardarNuevasEstadisticas(usuarioNuevo);
            this.iniciarSesion(usuarioNuevo);
          })
          .catch(error=> console.log(error));  
        })
        .catch(fracaso=> this.servicioAlerta.alertaError(fracaso.code));
      }
      else
      {
        this.servicioAlerta.alertaError(datosValidados.mensaje);
      }    
    }
    else
    {
      this.servicioAlerta.alertaError(mensaje);
    }
    
  }

  private validarNombreUsuarioYMailUnicos(nombreUsuario : string, mail : string) : any
  {
    let nombreUsuarioMinuscula = nombreUsuario.toLocaleLowerCase();
    let mailMinuscula = mail.toLocaleLowerCase();

    let exito : boolean = true;
    let mensaje : string = "Todo bien";

    for(let i : number=0; i< this.usuariosGuardados.length; i++)
    {
      if(this.usuariosGuardados[i].nombreUsuario.toLocaleLowerCase() === nombreUsuarioMinuscula)
      {
        mensaje = "El nombre de usuario ya pertenece a otra persona, intente otro";
        exito = false;
        break;
      }

      if(this.usuariosGuardados[i].mail.toLocaleLowerCase() === mailMinuscula)
      {
        mensaje = "El mail ya pertenece a otra persona, intente otro";
        exito = false;
        break;
      }
    }
    return {mensaje, exito};
  }
}

  /*
  private recuperarUsuario(mail : string) : Usuario
  {
    let usuarioRecuperado : Usuario = Usuario.getDefaultUser();

    for(let index = 0; index < this.usuariosGuardados.length; index++) 
    {
      if(this.usuariosGuardados[index].mail === mail)
      {
        const usuarioLeido = this.usuariosGuardados[index];
        
        usuarioRecuperado = new Usuario(usuarioLeido.id, usuarioLeido.nombre, usuarioLeido.apellido, usuarioLeido.nombreUsuario,
          usuarioLeido.mail, usuarioLeido.fechaCreacion,1);
      }
    }

    return usuarioRecuperado;
  }*/
