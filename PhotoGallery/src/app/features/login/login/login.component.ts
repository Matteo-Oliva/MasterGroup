import { ValidationService } from './../validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

password:string;
username:string;
invalidLogin:boolean;
 
 
  constructor(private fb: FormBuilder,
              private validationService:ValidationService,
              private router:Router) { }

  ngOnInit(): void {
    this.validationService.isLogged$()
    .subscribe(valid => {valid ? this.router.navigate(['/dashboard']): this.invalidLogin = true})
  }
    
  profileForm = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required] ,
  });

 onSubmit():void {
      console.warn(this.profileForm.value);
    }

  goLogin():void{
    this.validationService.goLogin(this.username,this.password);
  }
}
