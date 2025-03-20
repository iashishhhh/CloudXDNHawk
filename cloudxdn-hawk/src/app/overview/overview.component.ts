import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {

  isOpen = false;
  isOpen2 = false;
  user: any = {};
  loginTime: string = '';
  nextUpdateTime: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);

      const now = new Date();
      this.loginTime = now.toLocaleString();

      // Next Update after 6 hours from login time
      const nextUpdate = new Date(now.getTime() + 6 * 60 * 60 * 1000);
      this.nextUpdateTime = nextUpdate.toLocaleString();
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleDropdown2() {
    this.isOpen2 = !this.isOpen2;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
