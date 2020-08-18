import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin: boolean;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.authenticationService.isLogged$()
      .subscribe( result => {
        result ? this.router.navigate( ['/dashboard'] ) : this.invalidLogin = true;
      } );
  }

  login(): void {
    this.authenticationService.login(this.username, this.password);
  }

  cancel(): void {
    this.router.navigate( ['/dashboard'] );
  }
}
