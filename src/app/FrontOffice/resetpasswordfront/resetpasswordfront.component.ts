import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordResetService } from '../../services/reset-password.service';
import { NavigationEnd, Router } from '@angular/router'; // Import Router
import { PageViewService } from '../../services/page-view.service';


@Component({
  selector: 'app-resetpasswordfront',
  templateUrl: './resetpasswordfront.component.html',
  styleUrl: './resetpasswordfront.component.css'
})
export class ResetpasswordfrontComponent {
  formGroup!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private passwordResetService: PasswordResetService,
    private router: Router,
    private PageViewService:PageViewService // Inject Router


  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageUrl = this.router.url;

        this.PageViewService.logPageView(pageUrl).subscribe(response => {
          console.log('Page view logged:', response);
        });
      }
    });
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(6)]]
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
    const code = this.f['code'].value;
    const newpassword = this.f['newpassword'].value;
    
    // Call the resetPassword method from your password reset service
    this.passwordResetService.resetPassword(email, code, newpassword).subscribe(
      (response) => {
        // Handle success response
        console.log('Password reset successfully.');
        this.router.navigate(['/front/login']);
        // You can redirect the user to login page or any other page here
      },
      (error) => {
        // Handle error response
        console.error('Error occurred while resetting password:', error);
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
