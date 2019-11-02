import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MonthlyEmployeeScreeningRoutingModule } from './monthly-employee-screeing-routing.module';


@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    MonthlyEmployeeScreeningRoutingModule
  ]
})
export class MonthlyEmployeeScreeningModule { }
