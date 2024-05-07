// src/app/features/createInsurance/createInsurance.component.ts
import { Component } from '@angular/core';
import {
  CreateInsuranceService,
  InsuranceRequest,
} from '../../services/createInsurance.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'create-insurance',
  templateUrl: './createInsurance.component.html',
  styleUrls: ['./createInsurance.component.css'],
})
export class CreateInsuranceComponent {
  createForm!: FormGroup;
  loading = false;
  submitted = false;

  error: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private createInsuranceService: CreateInsuranceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      coverageAmount: ['', Validators.required, Validators.minLength(3)],
      type: ['', [Validators.required]],
      beneficiary: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.createForm.invalid) {
      return;
    }

    this.loading = true;
    const createData: InsuranceRequest = this.createForm.value;

    this.createInsuranceService.create(createData).subscribe(
      (data) => {
        // On successful registration, navigate to a success route or display a success message
        this.router.navigate(['/view-insurance']);
      },
      (error) => {
        this.error = 'Creation failed. Please try again later.';
        this.loading = false;
      }
    );
  }
}
