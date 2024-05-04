import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordResetService } from '../../services/reset-password.service';

@Component({
  selector: 'app-sendresetcode',
  templateUrl: './sendresetcode.component.html',
  styleUrls: ['./sendresetcode.component.css']
})
export class SendresetcodeComponent {
  resetCodeForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private passwordResetService: PasswordResetService,
    private router: Router
  ) {
    this.resetCodeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendResetCode() {
    if (this.resetCodeForm.valid) {
      const email = this.resetCodeForm.get('email')?.value;
      this.passwordResetService.sendResetCode(email).subscribe({
        next: () => {
          // Redirect to the ResetPasswordComponent upon successful reset code submission
          this.router.navigateByUrl('/reset-password');
        },
        error: (error) => {
          this.errorMessage = 'Failed to send reset code. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please enter a valid email address.';
    }
  }
}
