import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }

}