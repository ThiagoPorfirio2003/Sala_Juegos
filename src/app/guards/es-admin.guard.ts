import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { NavegacionService } from '../servicios/navegacion.service';
import { inject } from '@angular/core';

export const esAdminGuard: CanActivateFn = (route, state) => {
  let servicioUsuario : UsuarioService = inject(UsuarioService);
  let servicioNavegacion : NavegacionService =  inject(NavegacionService);
  let retorno : boolean;

  retorno = servicioUsuario.usuarioLogueado.Tipo == 0;

  if(!retorno)
  {
    servicioNavegacion.cambiarRuta('');
  }

  return retorno;
};
