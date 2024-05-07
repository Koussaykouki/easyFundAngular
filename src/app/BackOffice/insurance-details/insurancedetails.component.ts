import { Component } from '@angular/core';
import {
  CreateInsuranceService,
  InsuranceRequest,
} from '../../services/createInsurance.service';

@Component({
  selector: 'app-insurancedetails',
  templateUrl: './insurancedetails.component.html',
  styleUrl: './insurancedetails.component.css',
})
export class InsuranceDetailsComponent {
  insurances: InsuranceRequest[] = [];

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

  constructor(private insuranceService: CreateInsuranceService) {}
}
