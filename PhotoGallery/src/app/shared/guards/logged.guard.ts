import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated(): boolean | UrlTree {
    if ( this.authenticationService.isLogged() ) {
        return true;
    }
    // Redirect to the dashboard
    return this.router.parseUrl( '/dashboard' );
  }
}
