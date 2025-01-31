import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "username is Required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "password is Required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credential";
      }
    }
  }
}

