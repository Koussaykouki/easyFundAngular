// src/app/core/services/registration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cin?: number;
  phoneNumber?: string;
  twoFactorAuthEnabled?: boolean;
  dateOfBirth?: string;
  salary?: number;
  userStatus?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private authUrl = `${environment.apiBaseUrl}/api/v1/auth/register`; // Adjust based on your API URL setup

  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest): Observable<any> { // You might want to define a specific type for the response
    return this.http.post<any>(this.authUrl, registerRequest);
  }
}
