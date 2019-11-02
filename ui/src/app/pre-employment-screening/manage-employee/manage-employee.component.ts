import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  employees = [
    {
      firstName: 'Jeelani',
      middleName: 'Basha',
      lastName: 'Shaik',
      ssn: '123456789',
      email: 'jeelanshaik07@gmail.com'
    },
    {
      firstName: 'Sai',
      middleName: '',
      lastName: 'Krishna',
      ssn: '41234878',
      email: 'saiKrishna@gmail.com'
    },
    {
      firstName: 'Pavan',
      middleName: '',
      lastName: 'Kumar',
      ssn: '214587147',
      email: 'pavankumar@gmail.com'
    },
    {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      ssn: '8757842',
      email: 'johndoe@gmail.com'
    },
    {
      firstName: 'Milton',
      middleName: '',
      lastName: 'Henry',
      ssn: '987135412',
      email: 'henrymilton@gmail.com'
    },
  ];
  employeesBackup = [];
  employeeQuery: '';
  isEdit =  false;
  currentEmployee = {};
  constructor() { }

  ngOnInit() {
    this.employeesBackup = JSON.parse(JSON.stringify(this.employees));
  }

  searchEmployee() {
    if (this.employeeQuery === '') {
      this.employees = [...this.employeesBackup];
    } else {
      const arrayToReturn = this.employeesBackup.filter(row => {
      const columns = Object.keys(row);
        return (columns.map(column => {
          return row[column]
        }).toString().toLowerCase().indexOf(this.employeeQuery.toString().toLowerCase())) > -1;
      });
      this.employees = arrayToReturn;
    }
  }

  editEmployee(employee) {
    console.log(employee);
    this.isEdit = true;
    this.currentEmployee = employee;
  }

  deleteEmployee(employee) {
    const { ssn } = employee;
    const newEmployeeList = this.employees.filter(e => e.ssn !== ssn);
    this.employees = newEmployeeList;
  }

}
