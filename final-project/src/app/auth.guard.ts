import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  if (localStorage.getItem('user')) {
    if (route.routeConfig?.path === 'login') {
      router.navigate(['/home'], { replaceUrl: true });
      return true;
    }
    return true;
  }

  router.navigate(['login'], { queryParams: { returnUrl: state.url } });
  return false;
};
