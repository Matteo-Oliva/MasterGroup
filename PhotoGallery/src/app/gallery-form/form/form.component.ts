import { PictureService } from './../../features/shared/services/picture.service';
import { User } from './../../shared/service/user.model';
import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, Form } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;
  users: User[];
  model = new User;
  form = this.formBuilder.group({

    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+\\.[a-z]{2,}$')]],
    password: ['', [Validators.required, Validators.minLength(8)]]

  });


  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  newUser() {
    this.model = new User();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      name: '',
      surname: '',
      address: '',
      email: '',
      password: ''
    }
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }







  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.registerUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  reset() {
    this.form.setValue({
      name: '',
      surname: '',
      address: '',
      email: '',
      password: ''
    })
  }


  get name() {
    return this.form.get('name')
  }
  get surname() {
    return this.form.get('surname')
  }
  get address() {
    return this.form.get('address')
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }


}