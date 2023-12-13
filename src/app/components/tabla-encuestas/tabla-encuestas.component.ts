import { Component, Input } from '@angular/core';
import { Encuesta } from 'src/app/clases/encuesta';
import { EnumIdJuegos, EnumNivelDiversion, ManejoEnum } from 'src/app/clases/enumerados';

@Component({
  selector: 'app-tabla-encuestas',
  templateUrl: './tabla-encuestas.component.html',
  styleUrls: ['./tabla-encuestas.component.css']
})
export class TablaEncuestasComponent 
{
  @Input() encuestasAMostrar : Array<Encuesta>;

  constructor()
  {
    this.encuestasAMostrar = new Array<Encuesta>();
  }

  public idToNombreJuego(idJuego : EnumIdJuegos) : string
  {
    return ManejoEnum.idJuegoToPalabra(idJuego);
  }

  public nivelToPalabra(nivel : EnumNivelDiversion) : string
  {
    return ManejoEnum.nivelDiversionToPalabra(nivel);
  }

  public boolToPalabra(valor : boolean) : string
  {
    let retorno : string;
    
    if(valor)
    {
      retorno = 'Si';
    }
    else
    {
      retorno = 'No';
    }

    return retorno;
  }

}
