import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  private resetUrl = `${environment.apiBaseUrl}/api/v1/auth/forgot-password/send-code`; // Adjust with your backend URL
  private resetpwdUrl = `${environment.apiBaseUrl}/api/v1/auth/forgot-password/reset`; // Adjust with your backend URL

  
  constructor(private http: HttpClient) { }

  sendResetCode(email: string, validationMethod: string = 'SMS'): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { email, validationMethod };
    return this.http.post(this.resetUrl, body, { headers });
  }
  resetPassword(email: string, validationCode: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      email,
      validationCode,
      newPassword
    };
    return this.http.post(this.resetpwdUrl, body, { headers });
  }
}
