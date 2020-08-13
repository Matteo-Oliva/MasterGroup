import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    Password: ['', Validators.required] ,
  });

 

    onSubmit():void {
      console.warn(this.profileForm.value);
    }
}
