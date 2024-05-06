import { Component, OnInit } from '@angular/core';
import { SelectedClaimService } from '../../services/selected-claim.service';
import { ClaimService } from '../../services/claim.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimId: number | null = null;
  claim: any;
  replies: any[] = []; // Initialize replies array
  replyForm: FormGroup;

  constructor(
    private selectedClaimService: SelectedClaimService,
    private claimService: ClaimService,
    private fb: FormBuilder,
    private router:Router
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
        this.loadReplies(); // Call method to load replies when claimId changes
      }
    });
  }

  loadReplies(): void {
    if (this.claimId) {
      this.claimService.getRepliesByClaimId(this.claimId).subscribe(
        replies => {
          this.replies = replies;
        },
        error => {
          console.error('Error fetching replies:', error);
        }
      );
    }
  }

  submitReply(): void {
    if (this.claimId) {
      const replyData = this.replyForm.value;
      this.claimService.saveReply(this.claimId, replyData.message).subscribe(
        savedReply => {
          console.log('Reply saved:', savedReply);
          // Reload replies after successful save
          this.loadReplies();
          // Optionally, update UI or notify user
        },
        error => {
          console.error('Error saving reply:', error);
          // Handle error appropriately, e.g., show error message to the user
        }
      );
    }
  }
  closeClaim(): void {
    if (this.claimId) {
      this.claimService.closeClaim(this.claimId).subscribe(
        () => {
          console.log('Claim closed successfully');
          // Reload the current page
          window.location.reload();
        },
        error => {
          console.error('Error closing claim:', error);
          // Handle error appropriately, e.g., show error message to the user
        }
      );
    }
  }
  
  
}
