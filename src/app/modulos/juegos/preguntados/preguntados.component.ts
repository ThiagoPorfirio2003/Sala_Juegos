import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Encuesta } from 'src/app/clases/encuesta';
import { EnumIdJuegos } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { ManejoArrays } from 'src/app/clases/manejoArrays';
import { Preguntados } from 'src/app/clases/preguntados';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { ConsumoApiGitService } from 'src/app/servicios/consumo-api-git.service';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { NavegacionService } from 'src/app/servicios/navegacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent 
{
  private estadistica : UsuarioEstadistica;
  private suscripcionEstadisticas : any;
  private indiceJuegoActual : number

  public partida : Array<Preguntados>;
  public preguntadoAMostrar : Preguntados;

  public idJuego : EnumIdJuegos;
  public mostrarEncuesta : boolean;
  private volverAJugar : boolean;

  private suscripcionJuego! : Subscription;

  constructor(private servicioApi : ConsumoApiGitService, private servicioDB : DataBaseService,
    private servicioAlerta : AlertasService, public servicioUsuario : UsuarioService,
    private servicioNavegacion : NavegacionService)
  {
    this.indiceJuegoActual = 0;
    this.estadistica = UsuarioEstadistica.getDefault();    

    this.idJuego = EnumIdJuegos.Preguntados;
    this.mostrarEncuesta = false;
    this.volverAJugar = false;
    this.partida = new Array<Preguntados>();

    this.preguntadoAMostrar = new Preguntados('','','',['']);
  }

  ngOnInit()
  {
    this.cargarPartida();

    this.suscripcionEstadisticas = this.servicioDB.EstadisticasCollectionData
    .subscribe((estadisticas )=>
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

  ngOnDestroy()
  {
    this.suscripcionEstadisticas.unsubscribe();
    this.suscripcionJuego.unsubscribe();
  }


  private cargarPartida()
  {
    let respuestasAuxiliar :  string[];
    this.suscripcionJuego = this.servicioApi
    .getObservale('https://opentdb.com/api.php?amount=3&category=15&difficulty=medium&type=multiple')
    .subscribe((juegos : any)=>
    {
      this.partida = [];
      respuestasAuxiliar = new Array<string>();
      this.indiceJuegoActual = 0;

      if(juegos["response_code"] == 0)
      {
        console.log(juegos['results']);
        juegos['results'].forEach((element : any) => 
        {
          element.question = this.modificarFrase(element.question);
          element.correct_answer = this.modificarFrase(element.correct_answer)

          for(let i : number=0; i< element.incorrect_answers.length;i++)
          {
            element.incorrect_answers[i] = this.modificarFrase(element.incorrect_answers[i]);
          }

          element.incorrect_answers.push(element.correct_answer);

          element.incorrect_answers = ManejoArrays.cambiarOrden(element.incorrect_answers);

          this.partida.push(Preguntados.armar(element));
        });

        this.preguntadoAMostrar = this.partida[0];
      }

    })
  }

  
  private modificarFrase(frase : string) : string
  {
    let retorno : string;

    retorno = frase;

    if(retorno.includes("&Aacute;"))
    {
      retorno = retorno.replaceAll("&Aacute;",'Á');
    }

    if(retorno.includes("&Eacute;"))
    {
      retorno = retorno.replaceAll("&Eacute;",'É');
    }

    if(retorno.includes("&Iacute;"))
    {
      retorno = retorno.replaceAll("&Iacute;",'Í');
    }

    if(retorno.includes("&Oacute;"))
    {
      retorno = retorno.replaceAll("&Oacute;",'Ó');
    }

    if(retorno.includes("&Uacute;"))
    {
      retorno = retorno.replaceAll("&Uacute;",'Ú');
    }

    if(retorno.includes("&aacute;"))
    {
      retorno = retorno.replaceAll("&aacute;",'á');
    }

    if(retorno.includes("&eacute;"))
    {
      retorno = retorno.replaceAll("&eacute;",'é');
    }

    if(retorno.includes("&iacute;"))
    {
      retorno = retorno.replaceAll("&iacute;",'í');
    }

    if(retorno.includes("&oacute;"))
    {
      retorno = retorno.replaceAll("&oacute;",'ó');
    }

    if(retorno.includes("&uacute;"))
    {
      retorno = retorno.replaceAll("&uacute;",'ú');
    }

    if(retorno.includes("&aring;"))
    {
      retorno = retorno.replaceAll("&aring;",'å');
    }

    if(retorno.includes("&quot;"))
    {
      retorno = retorno.replaceAll("&quot;",'"');
    }

    if(retorno.includes("&#039;"))
    {
      retorno = retorno.replaceAll("&#039;","'")
    }

    if(retorno.includes("&amp;"))
    {
      retorno = retorno.replaceAll("&amp;",'&');
    }


    return retorno;
  }
  
  public recibirRespuesta(respuesta : string)
  {
    let mensajeFinal :string = 'Felicidades, ganaste!!!';
    let estaTerminada : boolean = true;
    let gano : number;
    
    gano = 2;

    if(this.preguntadoAMostrar.recibirRespuesta(respuesta))
    {
      if(this.indiceJuegoActual == this.partida.length-1)
      {
        gano =1;
        this.estadistica.actualizarDatos(true);
        mensajeFinal = 'Felicidades, ganaste!!!';
      }
      else
      {
        this.indiceJuegoActual++;
        estaTerminada = false;
        this.preguntadoAMostrar = this.partida[this.indiceJuegoActual];
      } 
    }
    else
    {
      this.estadistica.actualizarDatos(false);
      mensajeFinal = `Que mala suerte, perdiste :(\nLa respuesta era: ${this.preguntadoAMostrar.RespuestaCorrecta}`;

    }

    if(estaTerminada)
    {
      this.servicioDB.actualizarEstadistica(this.estadistica);
      this.servicioAlerta.alertaAceptarCancelar(mensajeFinal, gano, `¿Deseas jugar otra vez?`, 
      'Si', 'No', false)
      .then((respuesta)=>
      {
        this.volverAJugar = respuesta.isConfirmed;
        this.mostrarEncuesta = true;
      })
      .catch();  
    }
  }

  private reCargarPartida() : void
  {
    this.suscripcionJuego.unsubscribe();
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
