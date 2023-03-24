import { inject, Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../_services/auth.service';

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.getToken()) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
