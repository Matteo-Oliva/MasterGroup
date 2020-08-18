import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged$: Subject<boolean>;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.isLogged$ = this.authenticationService.isLogged$();
  }

  // tslint:disable-next-line: typedef
  goToLogin() {
    this.router.navigate( ['/login'] );
  }
}
