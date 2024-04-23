// src/app/features/login/login.component.ts
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.authenticate({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.errorMessage) {
            console.error('Login failed:', response.errorMessage);
            // Handle login error gracefully (e.g., display an error message to the user)
            this.handleError(response.errorMessage);
          } else {
            console.log('Login successful', response);
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            this.router.navigate(['/admin']);
          }
        },
        error: (error) => {
          console.error('Login failed with unexpected error:', error);
          // Handle unexpected error scenarios (e.g., network issues)
          this.handleUnexpectedError(error);
        }
      });
  }
  
  handleError(error: any): void {
    // Implement error handling logic for login errors (e.g., display user-friendly message)
    console.error('Login error:', error.message || error); // Extract error message if available
  
    // Get a reference to your error message element (replace with your actual selector)
    const errorMessageElement = document.getElementById('login-error-message');
  
    if (errorMessageElement) {
      // Set the error message content (sanitize if necessary)
      errorMessageElement.textContent = error.message || 'Wrong password or email.';
  
      // Optionally, show the error message element (adjust CSS for visibility)
      errorMessageElement.classList.remove('hidden'); // Replace 'hidden' with your actual hidden class
    } else {
      console.warn('Error message element not found. Consider adding one to your page.');
    }
  }
  
  handleUnexpectedError(error: any): void {
    // Implement error handling logic for unexpected errors (e.g., network issues)
    console.error('Unexpected login error:', error);
    // You could display a generic error message to the user here or redirect them to a dedicated error page
  }
}