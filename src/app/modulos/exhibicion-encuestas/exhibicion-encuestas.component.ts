import { Component } from '@angular/core';
import { Encuesta } from 'src/app/clases/encuesta';
import { DataBaseService } from 'src/app/servicios/data-base.service';

@Component({
  selector: 'app-exhibicion-encuestas',
  templateUrl: './exhibicion-encuestas.component.html',
  styleUrls: ['./exhibicion-encuestas.component.css']
})
export class ExhibicionEncuestasComponent 
{
  public encuestasAMostrar : Array<Encuesta>;
  private suscripcionEncuesta : any;

  constructor(private servicioDB : DataBaseService)
  {
    this.encuestasAMostrar = new Array<Encuesta>();
  }

  ngOnInit() : void
  {
    this.cargarEncuestas();
  }

  ngOnDestroy()
  {
    this.suscripcionEncuesta.unsubscribe()
  }

  private cargarEncuestas()
  {
    this.suscripcionEncuesta = this.servicioDB.EncuestaCollectionData
    .subscribe((docEncuestas)=>
    {
      this.encuestasAMostrar = Encuesta.armarLista(docEncuestas);
    })
  }

}
