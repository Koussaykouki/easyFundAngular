import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formGroup!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      cin: [''], // No specific validators, adjust as needed
      dateOfBirth: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      role: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    this.loading = true;
    // Logic to handle your form submission goes here.
    // For example, you could call a service to save the form data.
    console.log('Form data is valid and can be sent to the server:', this.formGroup.value);

    // Reset loading state and submitted state after the form is processed
    // For demonstration, just simulate with a timeout
    setTimeout(() => {
      this.loading = false;
      this.submitted = false;
      // Optionally reset the form or navigate away
      // this.formGroup.reset();
      // Navigate to another component or display success message
      // this.router.navigate(['/success']);
    }, 2000);
  }

  handleError(error: any) {
    this.loading = false;
    this.error = 'An error occurred';
    console.error('An error occurred:', error);
  }
}
