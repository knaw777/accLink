import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { PreEmploymentScreeningRoutingModule } from './pre-employment-screeing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [CreateEmployeeComponent, LandingComponent, ManageEmployeeComponent],
  imports: [
    CommonModule,
    PreEmploymentScreeningRoutingModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatGridListModule
  ]
})
export class PreEmploymentScreeningModule { }
