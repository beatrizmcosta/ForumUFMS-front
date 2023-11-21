import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, RouterLink]
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) { }
  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });
}
