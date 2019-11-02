import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  setLoginState = () =>  {
    this.isLoggedIn = true;
    localStorage.setItem('accrediLinkUser', 'true');
  }

  removeLoginState = () =>  {
    this.isLoggedIn = false;
    localStorage.removeItem('accrediLinkUser');
  }

  getLoginState() {
    if (this.isLoggedIn) {
      return true;
    } else if (localStorage.getItem('accrediLinkUser') === 'true') {
      return true;
    } else {
      console.log('user not found');
      return false;
    }
  }
}
