import { Component } from '@angular/core';
import { EnumTipoUsuario } from 'src/app/clases/enumerados';
import { UsuarioEstadistica } from 'src/app/clases/estadisticas/usuarioEstadistica';
import { DataBaseService } from 'src/app/servicios/data-base.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent 
{
  public estadisticas : Array<UsuarioEstadistica>;
  public estadisticasAMostrar : Array<UsuarioEstadistica>;
  private suscripcionEstadisticas : any;

  constructor(public servicioUsuario : UsuarioService, private servicioDB : DataBaseService)
  {
    this.estadisticas = new Array<UsuarioEstadistica>();
    this.estadisticasAMostrar = new Array<UsuarioEstadistica>();
  }

  ngOnInit()
  {
    this.suscripcionEstadisticas = this.servicioDB.EstadisticasCollectionData
    .subscribe((docEstadisticas)=>
    {
      this.estadisticas = UsuarioEstadistica.armarLista(docEstadisticas);
      this.estadisticasAMostrar = this.filrarEstadisticas(this.estadisticas);
    })
  }

  ngOnDestroy()
  {
    this.suscripcionEstadisticas.unsubscribe();
  }

  private filrarEstadisticas(estadisticas : UsuarioEstadistica[]) : UsuarioEstadistica[]
  {
    let retorno : UsuarioEstadistica[];

    retorno = [];

    estadisticas.forEach((esta)=>
    {
      if((this.servicioUsuario.usuarioLogueado.Tipo == EnumTipoUsuario.Normal && 
        this.servicioUsuario.usuarioLogueado.Id == esta.idUsuario) || 
      (this.servicioUsuario.usuarioLogueado.Tipo == EnumTipoUsuario.Administrador))
      {
        retorno.push(UsuarioEstadistica.armar(esta));
      }
    })

    return retorno;
  }
}
