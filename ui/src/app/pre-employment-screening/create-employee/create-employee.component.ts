import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup;
  get f() { return this.createEmployeeForm.controls; }

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createEmployeeForm = this.formBuilder.group({
      ssn: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required]
  });
  }

  createEmployee() {
    console.log(this.createEmployeeForm.value);
    /* const requestBody = this.createEmployeeForm.value;
    const sub = this.apiService.createEmployee(requestBody).subscribe(data => {
      console.log(data);
    }, () => {
      console.log('completed');
    }); */
  }
}
