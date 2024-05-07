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
  private authAdminAgentUrl = `${environment.apiBaseUrl}/api/v1/auth/authenticate-admin-agent`;
  private authInvestorClientUrl = `${environment.apiBaseUrl}/api/v1/auth/authenticate-investor-client`;
  private auth = `${environment.apiBaseUrl}/api/v1/auth/authenticate`;


  constructor(private http: HttpClient, private router: Router) {}

  authenticateAdminAgent(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.authAdminAgentUrl, authRequest);
  }

  authenticateInvestorClient(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.authInvestorClientUrl, authRequest);
  }
  authenticate(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.auth, authRequest);
  }

  logout(): void {
    // Clear user data from localStorage
    localStorage.removeItem('accessToken');
    // Optionally clear refreshToken if stored
    localStorage.removeItem('refreshToken');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
