import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageViewService } from '../../services/page-view.service';
import {
  CreateInsuranceService,
  InsuranceRequest,
} from '../../services/createInsurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css',
})
export class InsuranceComponent {
  insurances: InsuranceRequest[] = [];

  constructor(
    private router: Router,
    private insuranceService: CreateInsuranceService
  ) {}

  ngOnInit() {
    this.getInsurances();
  }
  getInsurances() {
    this.insuranceService.findAll().subscribe({
      next: (data) => {
        this.insurances = data;

        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error),
    });
  }
}
