import { Component, OnInit } from '@angular/core';
import { SelectedClaimService } from '../../services/selected-claim.service';
import { ClaimService } from '../../services/claim.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimId: number | null = null;
  claim: any;
  replyForm: FormGroup;

  constructor(
    private selectedClaimService: SelectedClaimService,
    private claimService: ClaimService,
    private fb: FormBuilder
  ) {
    this.replyForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.selectedClaimService.selectedClaimId$.subscribe(claimId => {
      this.claimId = claimId;
      if (this.claimId) {
        this.claimService.getClaimById(this.claimId).subscribe(
          claim => {
            this.claim = claim;
          },
          error => {
            console.error('Error fetching claim details:', error);
          }
        );
      }
    });
  }

  submitReply(): void {
    if (this.claimId) {
      const replyData = this.replyForm.value;
      this.claimService.saveReply(this.claimId, replyData.message).subscribe(
        savedReply => {
          console.log('Reply saved:', savedReply);
          // Optionally, update UI or notify user
        },
        error => {
          console.error('Error saving reply:', error);
          // Handle error appropriately, e.g., show error message to the user
        }
      );
    }
  }
}
