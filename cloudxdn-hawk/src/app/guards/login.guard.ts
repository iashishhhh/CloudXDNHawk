import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      // agar already login hai to dashboard bhej do
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true; // agar login nahi hai to login/signup dikhao
    }
  }
}
