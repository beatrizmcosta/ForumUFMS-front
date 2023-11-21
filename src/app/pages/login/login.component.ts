import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) { }
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  onSubmit(): void {
    console.log(this.loginForm.value)
  }
  login() {
    console.log('Login clicked. Implement your login logic.');
  }
}
