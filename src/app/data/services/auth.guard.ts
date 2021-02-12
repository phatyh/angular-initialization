import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.isLogged();

    if (isLoggedIn) {
      this.router.navigate(['/', 'panel']);
      return false;
    }

    if (!isLoggedIn) {
      this.router.navigate(['/', 'auth', 'login']);
    }

    return isLoggedIn;
  }
}
