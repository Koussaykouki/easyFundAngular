import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService, AuthenticationRequest } from '../../services/login.service';
import { PageViewService } from '../../services/page-view.service';

@Component({
  selector: 'app-loginfront',
  templateUrl: './loginfront.component.html',
  styleUrls: ['./loginfront.component.css']
})
export class LoginfrontComponent {
  formGroup!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private PageViewService : PageViewService
  ) { }
  

  ngOnInit() {
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
      password: ['', Validators.required]
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

    // Prepare authentication request data
    const authRequest: AuthenticationRequest = {
      email: this.f['email'].value,
      password: this.f['password'].value
    };

    // Call the login service to authenticate the user
    this.loginService.authenticate(authRequest)
    .subscribe(
        (response) => {
            // If authentication is successful, save tokens to localStorage and redirect to another component
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            console.log('Access token and refresh token saved to localStorage.');
            this.router.navigate(['/front']);
        },
        (error) => {
            // If authentication fails, display error message
            if (error && error.error && error.error.message) {
                this.handleError(error.error.message);
            } else {
                this.handleError('You are not authorized to access ');
            }
        }
    );


  
} handleError(errorMessage: string): void {
  console.error(errorMessage);

  // Assuming there's an element in your component's HTML to display the error message
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.innerText = errorMessage;
    errorElement.style.display = 'block';  // Make the error message visible
  }
}
}
