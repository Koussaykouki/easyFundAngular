import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService, RegisterRequest } from '../../services/registration.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cin: [''],
      dateOfBirth: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      role: ['', Validators.required]
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    this.loading = true;
    const registerRequest: RegisterRequest = this.formGroup.value;

    this.registrationService.register(registerRequest).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Reset form, loading state, and submission state
        this.formGroup.reset();
        this.loading = false;
        this.submitted = false;
        // Navigate to the loginfront component
        this.router.navigate(['/home/login']);
      },
      error => {
        console.error('Registration error:', error);
        this.loading = false;
        this.error = 'An error occurred during registration';
      }
    );
  }
}
