import { Component } from '@angular/core';
import { InsuranceContractsService } from '../../services/insuranceContracts.service';

@Component({
  selector: 'app-insurancecontractsdetails',
  templateUrl: './insurancecontractdetails.component.html',
  styleUrl: './insurancecontractdetails.component.css',
})
export class InsuranceContractsDetailsComponent {
  insurancesContracts: any[] = [];

  constructor(private insuranceContractsService: InsuranceContractsService) {}

  ngOnInit() {
    this.getInsurancesContracts();
  }
  getInsurancesContracts() {
    this.insuranceContractsService.findAll().subscribe({
      next: (data) => {
        this.insurancesContracts = data;

        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error),
    });
  }
}
