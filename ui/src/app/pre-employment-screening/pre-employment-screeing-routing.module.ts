import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LandingComponent } from './landing/landing.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pmlanding' },
  { path: 'pmlanding', component: LandingComponent },
  { path: 'createEmployee', component: CreateEmployeeComponent },
  { path: 'manageEmployee', component: ManageEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreEmploymentScreeningRoutingModule { }
