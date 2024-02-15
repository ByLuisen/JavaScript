import { CanActivateFn } from '@angular/router';

export const myFirstGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
