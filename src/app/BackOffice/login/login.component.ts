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
    this.loginService.authenticate({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        // Navigate to a different page or show success message
         this.router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Handle error
      }
    });
  }
}