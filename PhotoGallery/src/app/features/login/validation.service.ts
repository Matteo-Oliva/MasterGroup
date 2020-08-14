import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public readonly user = "user";
  private password = "password";

  private logged = false;
  private logged$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) { }

  goLogin(username:string,password:string):void {
    if(username === this.user && password === this.password){
      this.logged$.next(true);
      this.logged = true;
    }else{
      this.logged$.next(false)
      this.logged = false;
    }
  }

  isLogged$():Subject<boolean> {
    return this.logged$;
  }

  logOut():void{
    if(this.logged$){
      this.logged$.next(false);
      this.router.navigate(['/dashboard']);
    }
    this.logged = false;
  }

  public isLogged():boolean{
    return this.logged;
  }
}
