import { AuthServiceService } from './../../../features/shared/services/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthServiceService,private route:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authCheck();;
  }

  
  
  private authCheck():boolean | UrlTree{
    if(this.authService.isLogged()){
      return true;
    }
      return this.route.parseUrl('/dashboard');
    }
  }

