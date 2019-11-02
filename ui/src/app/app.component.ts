import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'accrediLinkUi';
  breadcrumbs = [];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
      const url = event['urlAfterRedirects'];
      const tempArray = url.split('/');
      tempArray.shift(); // remove first slash
      if (tempArray.length > 0) {
        this.breadcrumbs = [];
        this.breadcrumbs.push({path: 'landing', name: 'Home'});
        tempArray.map(item => {
          if (item === 'preEmpScreening') {
            this.breadcrumbs.push({path: 'preEmpScreening', name: 'Pre-Employment Screening'})
          }
          if (item === 'createEmployee') {
            this.breadcrumbs.push({path: 'preEmpScreening/createEmployee', name: 'Create Employee'})
          }
          if (item === 'manageEmployee') {
            this.breadcrumbs.push({path: 'preEmpScreening/manageEmployee', name: 'Manage Employee'})
          }
          if (item === 'monthlyEmpScreening') {
            this.breadcrumbs.push({path: 'monthlyEmpScreening', name: 'Monthly Employee Screening'});
          }
        });
      }
    }
    });
  }

  ngOnChanges() {
    console.log(this.router.url);
  }

  navigateRoute() {
    this.authService.getLoginState() ? this.router.navigateByUrl('landing') : this.router.navigateByUrl('');
  }

  logout() {
    this.authService.removeLoginState();
    this.router.navigateByUrl('/login');
  }
}
