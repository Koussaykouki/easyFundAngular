import { Component } from '@angular/core';
import { ClaimService } from '../../services/claim.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrl: './addclaim.component.css'
})
export class AddclaimComponent {
  claim = {
    title: '',
    claimType: '',
    description: ''
  };

  constructor(private claimService: ClaimService,private router:Router) {}

  submitClaim() {
    this.claimService.saveClaim(this.claim).subscribe(
      response => {
        console.log('Claim submitted', response);
        this.router.navigate(['/front/claims']);

        // Optionally, you can clear the form or show a success message here.
      },
      error => {
        console.log('Error submitting claim', error);
        // Optionally, handle the error, perhaps show an error message.
      }
    );
  }

}
