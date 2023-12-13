import { Component, Input } from '@angular/core';
import { EnumIdJuegos, EnumTipoUsuario } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { ManejoEnum } from '../../clases/enumerados';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent 
{
  @Input() estadisticasAMostrar : Array<UsuarioEstadistica>;
  @Input() tipoUsuarioVisualizador : EnumTipoUsuario;

  constructor()
  {
    this.estadisticasAMostrar = new Array<UsuarioEstadistica>();
    this.tipoUsuarioVisualizador = EnumTipoUsuario.Normal;
  }

  public idJuegoToPalabra(idJuego : EnumIdJuegos) : string
  {
    return ManejoEnum.idJuegoToPalabra(idJuego);
  }
}
