// src/app/features/login/login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private cookie:CookieService,private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.authenticate({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.errorMessage) {
            // Handle login error gracefully
            this.handleError(response.errorMessage);
          } else {
            // Handle successful login
            console.log('Login successful', response);
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            this.cookie.set("emailUser", this.email);
            this.router.navigate(['/admin']);
          }
        },
        error: (error) => {
          // Handle unexpected error scenarios
          console.error('Login failed with unexpected error:', error);
          this.handleUnexpectedError(error.error?.errorMessage || error.message);
        }
      });
  }
  
  handleError(error: string): void {
    console.error('Login error:', error);
  
    const errorMessageElement = document.getElementById('login-error-message');
    if (errorMessageElement) {
      errorMessageElement.textContent = error;
      errorMessageElement.classList.remove('hidden'); // Make sure the element is visible
    } else {
      console.warn('Error message element not found. Consider adding one to your page.');
    }
  }
  
  handleUnexpectedError(error: string): void {
    console.error('Unexpected login error:', error);
    const errorMessageElement = document.getElementById('login-error-message');
    if (errorMessageElement) {
      errorMessageElement.textContent = 'You are unauthorized to access this';
      errorMessageElement.classList.remove('hidden'); // Make sure the element is visible
    }
  }
}