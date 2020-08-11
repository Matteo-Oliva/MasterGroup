import { LoginModel } from './../../../shared/model/login-model/login.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../shared/services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  invalidLogin: boolean;


  constructor(private fb: FormBuilder,private route: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      
      username: [this.user.username, [Validators.required, ]],
      password: [this.user.password, [Validators.required, Validators.minLength(8),Validators.maxLength(20)]]
 
    })
    this.authService.isLogged$().subscribe(result => {
      result ? this.route.navigate(['/dashboard']) : this.invalidLogin = true;
    })
  }
  loginSubmit(){
    this.authService.login(this.user.username, this.user.password)
    }

    get username() {
      return this.loginForm.get('username')
    }
    get password() {
      return this.loginForm.get('password')
    }
  


}