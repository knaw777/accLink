import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'preEmpScreening',
    loadChildren: () => import('./pre-employment-screening/pre-employment-screening.module').then(m => m.PreEmploymentScreeningModule),
    canActivate: [AuthGuard]
  },
  { path: 'monthlyEmpScreening',
    loadChildren: () => import('./monthly-employee-screening/monthly-employee-screening.module').then(m => m.MonthlyEmployeeScreeningModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
