import { RegisterModel } from './../../../shared/model/register-model/register.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup
  submitted = false;
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      surname: [this.user.surname, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      address: [this.user.address, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [this.user.email, [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+\\.[a-z]{2,}$')]],
      password: [this.user.password, [Validators.required, Validators.minLength(8),Validators.maxLength(20)]]
 
    })
        
  }
  
  get formData() {return this.registerForm.controls;}

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    alert(JSON.stringify(this.registerForm.value))
  }

  registerSubmit(){
    alert('Thank you for registration , remember this username:'+  this.user.name +', email:'+   this.user.email +', password:'+ this.user.password)
  }
  

  resetForm() {
    this.registerForm.setValue({
      name: '',
      surname: '',
      address: '',
      email: '',
      password: ''
    })
  }
  get name() {
    return this.registerForm.get('name')
  }
  get surname() {
    return this.registerForm.get('surname')
  }
  get address() {
    return this.registerForm.get('address')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }


}
