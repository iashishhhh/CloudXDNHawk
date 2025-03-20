import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, data);
  }


  login(email: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
  }

}
