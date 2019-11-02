import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'createEmployee' },
  { path: 'createEmployee', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyEmployeeScreeningRoutingModule { }
