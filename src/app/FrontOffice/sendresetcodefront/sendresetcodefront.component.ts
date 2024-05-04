import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { PasswordResetService } from '../../services/reset-password.service';

@Component({
  selector: 'app-sendresetcodefront',
  templateUrl: './sendresetcodefront.component.html',
  styleUrls: ['./sendresetcodefront.component.css'] // Corrected styleUrl to styleUrls
})
export class SendresetcodefrontComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private passwordResetService: PasswordResetService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    this.loading = true;
    const email = this.f['email'].value;
    
    // Call the sendResetCode method from your password reset service
    this.passwordResetService.sendResetCode(email).subscribe(
      (response) => {
        // Handle success response
        console.log('Reset code sent successfully.');
        // Redirect to Resetpasswordfront component
        this.router.navigate(['/home/resetpasswordfront']); // Adjust the route according to your routing configuration
      },
      (error) => {
        // Handle error response
        console.error('Error occurred while sending reset code:', error);
        this.loading = false;
      }
    );
  }
}
