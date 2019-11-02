import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  get f() { return this.registerForm.controls; }

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ssn: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required]
  });
  }

  registerUser() {
    console.log(this.registerForm.value);
 /*    const requestBody = this.registerForm.value;
    const sub = this.apiService.registerUser(requestBody).subscribe(data => {
      console.log(data);
    }, () => {
      console.log('completed');
    }); */
  }

}
