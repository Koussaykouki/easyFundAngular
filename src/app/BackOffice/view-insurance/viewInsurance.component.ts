// src/app/features/viewInsurance/viewInsurance.component.ts
import { Component, NgModule } from '@angular/core';
import {
  CreateInsuranceService,
  InsuranceRequest,
} from '../../services/createInsurance.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'view-insurance',
  templateUrl: './viewInsurance.component.html',
  styleUrls: ['./viewInsurance.component.css'],
})
export class ViewInsuranceComponent {
  error: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private insuranceService: CreateInsuranceService,
    private router: Router
  ) {}
}
