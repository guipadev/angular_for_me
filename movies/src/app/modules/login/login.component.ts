import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { properties } from '../../../assets/properties/properties';
import { ApiService } from '../../services/api.service';
import { constantUri } from '../../utils/constantUri';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
})
export class LoginComponent {
  logo = properties.logo;

  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService<any>
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();

      for (const key in this.formLogin.controls) {
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }

    const { username, password } = this.formLogin.value;

    const body = {
      username,
      password,
    };

    const configPost = {
      url: constantUri.validateWithLogin,
      params: constantUri.apikey,
      body,
    };

    //this.apiService.postService();
  }
}
