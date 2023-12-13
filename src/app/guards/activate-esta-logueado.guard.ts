import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { NavegacionService } from '../servicios/navegacion.service';


export const activateEstaLogueadoGuard: CanActivateFn = (route, state) => {
  
  let servicioUsuario : UsuarioService = inject(UsuarioService);
  let servicioNavegacion : NavegacionService =  inject(NavegacionService);
  let retorno : boolean;

  retorno = servicioUsuario.EstaLogueado

  if(!retorno)
  {
    servicioNavegacion.cambiarRuta('');
  }
  return retorno;
};
