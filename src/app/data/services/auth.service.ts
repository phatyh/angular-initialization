import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, finalize, timeout } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
// import { UserLogin, UserRegister, ITokenResponse } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenName: string = '_token';
  decodedToken: any;

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
  ) { }

  get token(): string {
    return localStorage.getItem(this.tokenName) || '';
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenName);

    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return this.jwtHelper.isTokenExpired(this.token) === false;
  }

  getUser(): any {
    console.log(this.jwtHelper.decodeToken(this.token));

    return this.jwtHelper.decodeToken(this.token);
  }

  getTokenExpirationDate(): Date | null {
    return this.jwtHelper.getTokenExpirationDate(this.token);
  }
}
