// src/app/features/viewInsuranceContracts/viewInsuranceContracts.component.ts
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InsuranceContractsService } from '../../services/insuranceContracts.service';

@Component({
  selector: 'view-insurance-contracts',
  templateUrl: './viewInsuranceContracts.component.html',
  styleUrls: ['./viewInsuranceContracts.component.css'],
})
export class ViewInsuranceContractComponent {
  error: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private insuranceContractsService: InsuranceContractsService,
    private router: Router
  ) {}
}
