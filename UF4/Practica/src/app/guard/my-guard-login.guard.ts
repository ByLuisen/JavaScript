import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SincronService } from '../services/sincron.service';

export const myGuardLoginGuard: CanActivateFn = (route, state) => {
  const userLogged = inject(SincronService).usuariData();

  if (userLogged) {
    return true; // estoy logueado
  } else {
    return inject(Router).navigateByUrl('/login'); // no estoy logueado
  }
  return true;
};
