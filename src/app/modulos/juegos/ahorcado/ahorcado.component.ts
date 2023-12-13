import { Component } from '@angular/core';
import { Ahorcado } from 'src/app/clases/ahorcado';
import { Encuesta } from 'src/app/clases/encuesta';
import { EnumIdJuegos } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { NavegacionService } from 'src/app/servicios/navegacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {

  public pathImagenAMostrar : string;
  private estadistica : UsuarioEstadistica;
  private suscripcionEstadisticas : any;
  private idLetrasDeshabilitadas : Array<string>;

  public datosPosiblesAhorcados : Array<any>;
  public juegoAhorcado : Ahorcado;

  public idJuego : EnumIdJuegos;
  public mostrarEncuesta : boolean;
  private volverAJugar : boolean;

  public constructor(private servicioAlerta : AlertasService, private servicioNavegacion : NavegacionService,
    public servicioUsuario : UsuarioService, private servicioDB : DataBaseService)
  {
    let ahorcadoElegido : number;
    this.estadistica = UsuarioEstadistica.getDefault();    
    this.idLetrasDeshabilitadas = new Array<any>();

    this.idJuego = EnumIdJuegos.Ahorcado;
    this.mostrarEncuesta = false;
    this.volverAJugar = false;

    this.datosPosiblesAhorcados =   
    [
      {palabra: 'PERRO', pista: 'Es una mascota'},
      {palabra: 'MURCIELAGO', pista: 'Es un animal que posee todas las vocales'},
      {palabra: 'COMPUTADORA', pista: 'Es el aparato que se usa para programar'},
      {palabra: 'CUCHILLO', pista: 'Se usa para cortar comida'},
      {palabra: 'ABECEDARIO', pista: 'Se puede considerar como un diccionario de letras'},
      {palabra: 'ARGENTINA', pista: 'Es un pais de Latinoamerica'},
      {palabra: 'CELULA', pista: 'Es la unidad minima de la vida'},
      {palabra: 'VIRUS', pista: 'Necesitan invadir celulas para reproducirse'},
      {palabra: 'RADIACION', pista: 'El uranio emite esta cosa'},
      {palabra: 'DIAMANTE', pista: 'Es el mineral, que se encuentra en la naturaleza, mas duro conocido'},
    ]; 
  
    this.pathImagenAMostrar =  this.calcularPathImagen(0);

    ahorcadoElegido = Math.floor(Math.random() * this.datosPosiblesAhorcados.length);

    this.juegoAhorcado = new Ahorcado(this.datosPosiblesAhorcados[ahorcadoElegido].palabra, 
      this.datosPosiblesAhorcados[ahorcadoElegido].pista, 6);
  }

  ngOnInit()
  {
    this.juegoAhorcado.prepararPartida();
    this.suscripcionEstadisticas = this.servicioDB.EstadisticasCollectionData
    .subscribe((estadisticas )=>
    {
      for(let esta of estadisticas)
      {
        if(esta['idUsuario'] == this.servicioUsuario.usuarioLogueado.Id &&
        esta['idJuego'] == EnumIdJuegos.Ahorcado)
        {
          this.estadistica = UsuarioEstadistica.armar(esta);
        }
      }
    })
  }

  ngOnDestroy()
  {
    this.suscripcionEstadisticas.unsubscribe();
  }

  private calcularPathImagen(erroresCometidos : number) : string
  {
    return 'https://firebasestorage.googleapis.com/v0/b/mifriv-22eda.appspot.com/o/Juegos%2FAhorcado%2Fahorcado_' + erroresCometidos + 
    '.jpg?alt=media&token=1df6445f-694a-40b9-9323-5619707551fc&_gl=1*rx7o7d*_ga*MTc3MzMwODc2Ni4xNjkzNDI4MDU3*_ga_CW55HF8NVT*MTY5ODYyNTk0Ny43MS4xLjE2OTg2MjcwNzcuMzkuMC4w';
  }

  public recibirLetra(letra : string)
  {
    let resultadoObtenido : number = this.juegoAhorcado.analizarLetra(letra);

    (<HTMLButtonElement> document.getElementById(letra)).disabled = true;

    this.idLetrasDeshabilitadas.push(letra);

    if(resultadoObtenido > 1)
    {
      let mensajeFinal = 'Felicidades, ganaste!!!';

      if(resultadoObtenido ==2)
      {
        this.estadistica.actualizarDatos(true);
      }

      if(resultadoObtenido == 3)
      {
        this.estadistica.actualizarDatos(false);
        mensajeFinal = 'Que mala suerte, perdiste :(';
      }

      this.servicioDB.actualizarEstadistica(this.estadistica);
      this.servicioAlerta.alertaAceptarCancelar(mensajeFinal, resultadoObtenido-1, '¿Deseas jugar otra vez?', 
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
      if(resultadoObtenido == 0)
      {
        this.pathImagenAMostrar = this.calcularPathImagen(this.juegoAhorcado.ErroresHechos);
      }
    }
  }

  public mostrarPista() : void
  {
    this.servicioAlerta.alertaIncognita('Pista', this.juegoAhorcado.Pista);
  }

  private reCargarPartida() : void
  {
    let ahorcadoElegido : any = Math.floor(Math.random() * this.datosPosiblesAhorcados.length);

    this.pathImagenAMostrar =  this.calcularPathImagen(0);

    this.juegoAhorcado = new Ahorcado(this.datosPosiblesAhorcados[ahorcadoElegido].palabra, 
      this.datosPosiblesAhorcados[ahorcadoElegido].pista, 6);
  
    this.habilitarLetras();
    this.juegoAhorcado.prepararPartida();
  }

  private habilitarLetras()
  {
    this.idLetrasDeshabilitadas.forEach((letra)=>
    {
      (<HTMLButtonElement> document.getElementById(letra)).disabled = false;
    })
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
