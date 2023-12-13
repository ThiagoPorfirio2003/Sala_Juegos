import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class ERROR404Component 
{
  constructor(private servicioUsuario: UsuarioService)
  {
    
  }

  ngOnInit()
  {
    this.servicioUsuario.desLoguearUsuario();
  }
}
