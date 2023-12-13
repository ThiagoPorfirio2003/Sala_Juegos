import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent 
{
  @Output() pasarTeclaApretadaEvent : EventEmitter<string>;

  public constructor()
  {
    this.pasarTeclaApretadaEvent = new EventEmitter<string>();
  }

  public pasarTeclaApretada(tecla : string)
  {
    this.pasarTeclaApretadaEvent.emit(tecla);
  }
  
}
