import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService, RegisterRequest } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  loading = false;
  submitted = false;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cin: [''],
      phoneNumber: [''],
      dateOfBirth: [''],
      salary: [''],
      userStatus: [''],
      role: [''],
      twoFactorAuthEnabled: ['']
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;
    const registerData: RegisterRequest = this.registrationForm.value;

    this.registrationService.register(registerData).subscribe(
      data => {
        // On successful registration, navigate to a success route or display a success message
        this.router.navigate(['/login']);
      },
      error => {
        this.error = 'Registration failed. Please try again later.';
        this.loading = false;
      }
    );
  }
}
