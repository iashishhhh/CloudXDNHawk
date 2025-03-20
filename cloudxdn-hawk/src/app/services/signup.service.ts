import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:3000'; // JSON Server URL

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/users`, data);
  }
}
// 