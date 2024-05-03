// src/app/core/services/login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  accessToken: string;
  refreshToken: string;
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authUrl = `${environment.apiBaseUrl}/api/v1/auth/authenticate`; // Adjust based on your API URL setup

  constructor(private http: HttpClient,private router: Router) {}

  authenticate(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.authUrl, authRequest);
  }
  logout(): void {
    // Clear user data from localStorage
    localStorage.removeItem('accessToken');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}