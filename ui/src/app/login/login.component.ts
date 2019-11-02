import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from './../api.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  toggleType = 'password';
  showForgotPasswordField = false;
  get f() { return this.loginForm.controls; }

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
  });
  }

  showPassword() {
    setTimeout(() => {
      this.toggleType = 'password';
    }, 1000);
    this.toggleType = 'text';
  }

  loginUser() {
 /*    console.log(this.loginForm.value);
    const requestBody = this.loginForm.value;
    const sub = this.apiService.loginUser(requestBody).subscribe(data => {
      console.log(data);
    }, () => {
      console.log('completed');
    }); */
    if (this.loginForm.value.userName === 'admin') {
      this.authService.setLoginState();
      localStorage.setItem('accredilinkUser', 'admin');
      this.router.navigateByUrl('landing');
    } else {
      this.authService.removeLoginState();
    }
  }

  forgotPassword() {
    this.showForgotPasswordField = true;
  }

  sendEmail() {
    this.showForgotPasswordField = false;
    this.loginForm.reset({email: '', password: '', userName: ''});
  }

  cancelFromForgotPassword() {
    this.loginForm.reset({email: '', password: '', userName: ''});
    this.showForgotPasswordField = false;
  }

}
