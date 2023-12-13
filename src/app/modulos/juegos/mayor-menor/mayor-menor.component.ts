import { Component } from '@angular/core';
import { mayorMenor } from 'src/app/clases/mayorMenor';
import { ConsumoApiGitService } from '../../../servicios/consumo-api-git.service';
import { Carta } from 'src/app/clases/carta';
import { Subscription } from 'rxjs';
import { EnumEstadoMayorMenor, EnumIdJuegos } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Encuesta } from 'src/app/clases/encuesta';
import { NavegacionService } from 'src/app/servicios/navegacion.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent 
{
  public partida! : mayorMenor;
  private suscripcionCartas! : Subscription

  public idJuego : EnumIdJuegos;
  public mostrarEncuesta : boolean;
  private volverAJugar : boolean;

  private estadistica! : UsuarioEstadistica;
  private suscripcionEstadisticas! : Subscription;

  public imgAMostrar : string;

  constructor(private servicioApi : ConsumoApiGitService, private servicioDB : DataBaseService,
    private servicioAlerta : AlertasService, public servicioUsuario : UsuarioService,
    private servicioNavegacion : NavegacionService)
  {
    this.idJuego = EnumIdJuegos.Mayor_o_menor;
    this.mostrarEncuesta = false;
    this.volverAJugar = false;
    this.imgAMostrar = 'https://www.deckofcardsapi.com/static/img/back.png';
  }

  ngOnInit()
  {
    this.cargarPartida();
    this.cargarEstadistica();
  }

  ngOnDestroy()
  {
    this.suscripcionCartas.unsubscribe();
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

  private cargarPartida()
  {
    let valorCarta : number;
    this.suscripcionCartas = this.servicioApi.getObservale('https://www.deckofcardsapi.com/api/deck/new/draw/?count=4')
    .subscribe((datosLeidos : any)=>
    {
      if(datosLeidos['success'])
      {
        const cartasLeidas : Array<any> = datosLeidos['cards'];
        const cartas : Carta[] = new Array<Carta>();

        cartasLeidas.forEach((cartaLeida)=>
        {
          valorCarta = parseInt(cartaLeida.value);

          if(Number.isNaN(valorCarta))
          {
            switch(cartaLeida.value)
            {
              case 'JACK': 
                valorCarta = 11;
                break;
        
              case 'QUEEN':
                valorCarta = 12;
                break;

              case 'KING':
                valorCarta = 13
                break;

              case 'ACE':
                valorCarta =14
                break;
            }
          }          
          cartas.push(new Carta(valorCarta,cartaLeida['image']));
        })
        this.partida = new mayorMenor(cartas);
        this.imgAMostrar = this.partida.cartaAMostrar.svgUrl;
        console.log(cartas);
      }
    })
  }


  public recibirRespuesta(esMayor : boolean)
  {
    if(!this.mostrarEncuesta)
    {
      let resultado : EnumEstadoMayorMenor = this.partida.recibirRespuesta(esMayor);
      let mensajeFinal : string;
      let estaGanada : boolean;
  
      this.imgAMostrar = this.partida.cartaAMostrar.svgUrl;
      if(resultado != EnumEstadoMayorMenor.Vigente)
      {
        if(EnumEstadoMayorMenor.Perdido == resultado)
        {
          mensajeFinal = 'Que mala suerte, perdiste :(';
          estaGanada = false;
        }
        else
        {
          estaGanada = true;
          mensajeFinal = 'Felicidades, ganaste!!!';
        }
  
        this.estadistica.actualizarDatos(estaGanada);
        this.servicioDB.actualizarEstadistica(this.estadistica);
  
        this.servicioAlerta.alertaAceptarCancelar(mensajeFinal, resultado, '¿Deseas jugar otra vez?', 
        'Si', 'No', false)
        .then((respuesta)=>
        {
          this.volverAJugar = respuesta.isConfirmed;
          this.mostrarEncuesta = true;
        })
        .catch();   
      }
    }
  }

  private reCargarPartida() : void
  {
    this.suscripcionCartas.unsubscribe();
    this.cargarPartida();
  }

  public recibirEncuesta(encuesta : Encuesta)
  {
    this.servicioDB.agregarEncuesta(encuesta);

    this.mostrarEncuesta = false;
    if(this.volverAJugar)
    {
      this.reCargarPartida();
    }
    else
    {
      this.servicioNavegacion.cambiarRuta('/home')
    }
  }
}
