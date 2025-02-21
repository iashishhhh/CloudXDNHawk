import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string = '/home';

  username = "";
  password = "";
  errorMsg = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

  }

  login() {


    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);

      if (res === 200) {
        localStorage.setItem('user', JSON.stringify({ username: this.username, password: this.password }));

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

        this.router.navigate([returnUrl], { replaceUrl: true });
      } else if (res === 403) {
        this.errorMsg = "Invalid username and password";
      }
    }
  }
  togglePasswordVisibility(event: Event) {
    const passwordField = document.getElementById('password') as HTMLInputElement;
    const button = event.target as HTMLButtonElement;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      button.textContent = '🙈';
    } else {
      passwordField.type = 'password';
      button.textContent = '👁️';
    }
  }
}
