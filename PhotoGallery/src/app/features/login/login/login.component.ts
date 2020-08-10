import { UserService } from './../../../shared/service/user.service';
import { AuthServiceService } from './../../shared/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  form = this.formBuilder.group({

    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(8)]]

  });


  constructor(private formBuilder: FormBuilder, private route: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.isLogged$().subscribe(result => {
      result ? this.route.navigate(['/dashboard']) : this.invalidLogin = true;
    })
    
  }

  login() {
    this.authService.login(this.username, this.password);
  }

  
     
  
  nameErrorMessage() {
    if (this.form.get('name').hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.get('name') ? 'Not a valid name' : '';
  }
  passwordErrorMessage() {
    if (this.form.get('password').hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.get('password') ? 'Not a valid password , min length 8' : '';
  }

}
