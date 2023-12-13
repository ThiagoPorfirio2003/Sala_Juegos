import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Encuesta } from 'src/app/clases/encuesta';
import { EnumIdJuegos } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { fotosUnaPalabra } from 'src/app/clases/fotosUnaPalabra';
import { ManejoArrays } from 'src/app/clases/manejoArrays';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { NavegacionService } from 'src/app/servicios/navegacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-fotos-una-palabra',
  templateUrl: './fotos-una-palabra.component.html',
  styleUrls: ['./fotos-una-palabra.component.css']
})
export class FotosUnaPalabraComponent 
{
  //fotosUnaPalabra

  private partidas! : Array<fotosUnaPalabra>;
  public partidaActual! : fotosUnaPalabra;
  private indicePartidaActual : number;
  private suscripcionPartidas! : Subscription
  private partidaInicio : boolean;

  public idJuego : EnumIdJuegos;
  public mostrarEncuesta : boolean;
  private volverAJugar : boolean;

  private estadistica! : UsuarioEstadistica;
  private suscripcionEstadisticas! : Subscription;


  constructor(private servicioDB : DataBaseService,
    private servicioAlerta : AlertasService, public servicioUsuario : UsuarioService,
    private servicioNavegacion : NavegacionService)
  {
    this.idJuego = EnumIdJuegos.Fotos_una_palabra;
    this.mostrarEncuesta = false;
    this.volverAJugar = false;
    this.indicePartidaActual = 0;
    this.partidaActual = new fotosUnaPalabra('',['','','','']);
    this.partidaInicio = false;
  }

  ngOnInit()
  {
    this.cargarPartidas();
    this.cargarEstadistica();
  }

  ngOnDestroy()
  {
    this.suscripcionPartidas.unsubscribe();
    this.suscripcionEstadisticas.unsubscribe();
  }

  private cargarEstadistica()
  {
    this.suscripcionEstadisticas = this.servicioDB.EstadisticasCollectionData
    .subscribe((estadisticas)=>
    {
      for(let esta of estadisticas)
      {
        if(esta['idUsuario'] == this.servicioUsuario.usuarioLogueado.Id &&
        esta['idJuego'] == this.idJuego)
        {
          this.estadistica = UsuarioEstadistica.armar(esta);
        }
      }
    })
  }

  private cargarPartidas()
  {
    this.suscripcionPartidas = this.servicioDB.FotosUnaPalabraCollectionData
    .subscribe((partidas)=>
    {
      this.partidas = ManejoArrays.cambiarOrden(fotosUnaPalabra.armarLista(partidas));
      if(!this.partidaInicio)
      {
        this.pasarASiguientePartida();
        this.partidaInicio = true;
      }
    })
  }

  private pasarASiguientePartida()
  {
    this.partidaActual = this.partidas[this.indicePartidaActual];
    this.partidaActual.resetPalabraAMostrar();
    this.indicePartidaActual++;

    if(this.indicePartidaActual == this.partidas.length)
    {
      this.indicePartidaActual = 0;
    }
  }

  public pasarPalabra()
  {
    let mensajeFinal : string;
    let estaGanada : boolean;
    let palabraElegida : string;
    let simboloAMostrar : number;

    palabraElegida = this.partidaActual.PalabraAMostrar.replaceAll(' ','');

    if(!palabraElegida.includes('_'))
    {
      estaGanada = this.partidaActual.recibirPalabra(palabraElegida);

      if(estaGanada)
      {
        mensajeFinal = 'Felicidades, ganaste!!!';
        simboloAMostrar = 1;
      }
      else
      {
        mensajeFinal = 'Que mala suerte, perdiste :(\nLa palabra era ' + this.partidaActual.PalabraAEncontrar;
        simboloAMostrar = 2
      }
  
      this.estadistica.actualizarDatos(estaGanada);
      this.servicioDB.actualizarEstadistica(this.estadistica);
  
      this.partidaActual.resetPalabraAMostrar();
      this.servicioAlerta.alertaAceptarCancelar(mensajeFinal, simboloAMostrar, '¿Deseas jugar otra vez?', 
      'Si', 'No', false)
      .then((respuesta)=>
      {
        this.volverAJugar = respuesta.isConfirmed;
        this.mostrarEncuesta = true;
      })
      .catch(); 
    }
    else
    {
      this.servicioAlerta.alertaError('La palabra aun no esta completa');
    }
  }

  public recibirEncuesta(encuesta : Encuesta)
  {
    this.servicioDB.agregarEncuesta(encuesta);

    this.mostrarEncuesta = false;
    if(this.volverAJugar)
    {
      this.pasarASiguientePartida();
    }
    else
    {
      this.servicioNavegacion.cambiarRuta('/home')
    }
  }
}
