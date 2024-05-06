import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordResetService } from '../../services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  email: string = ''; // Define email property
  code: string = ''; // Define code property
  newpassword: string = ''; // Define newpassword property
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private passwordResetService: PasswordResetService,
    private router: Router
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  reset() {
    if (this.resetForm.valid) {
      const { email, code, newPassword } = this.resetForm.value;
      this.passwordResetService.resetPassword(email, code, newPassword).subscribe({
        next: () => {
          // Password reset successful, navigate to success page or login page
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          this.errorMessage = 'Failed to reset password. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }
}
