import { Component } from '@angular/core';
import { ClaimService } from '../../services/claim.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceContractsService } from '../../services/insuranceContracts.service';

@Component({
  selector: 'app-contractRequest',
  templateUrl: './contractRequest.component.html',
  styleUrl: './contractRequest.component.css',
})
export class ContractRequestComponent {
  claim = {
    title: '',
    claimType: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private contractService: InsuranceContractsService,
    private router: Router
  ) {}
  insuranceId = +this.route.snapshot.paramMap.get('id')!;

  submitContract() {
    this.contractService.create(this.insuranceId, this.claim).subscribe(
      (response) => {
        console.log('Contract submitted', response);
        // this.router.navigate(['/front/claims']);

        // Optionally, you can clear the form or show a success message here.
      },
      (error) => {
        console.log('Error submitting claim', error);
        // Optionally, handle the error, perhaps show an error message.
      }
    );
  }
}
