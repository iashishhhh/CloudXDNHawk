import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) { }
  login(uname: string, pword: string) {
    if (uname === 'ashish' && pword === '123456789') {
      return 200;
    } else
      return 403;
  }

  logout() {
    this.router.navigate(['login']);
  } 
}

