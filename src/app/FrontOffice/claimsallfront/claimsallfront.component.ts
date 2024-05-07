import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { ClaimService } from '../../services/claim.service';
import { Router } from '@angular/router';
import { PageViewService } from '../../services/page-view.service';

@Component({
  selector: 'app-claimsallfront',
  templateUrl: './claimsallfront.component.html',
  styleUrls: ['./claimsallfront.component.css']
})
export class ClaimsallfrontComponent implements OnInit {
  claim$!: Observable<any>;
  replies$!: Observable<any>;
  replyMessage: string = '';
  
  constructor(private route: ActivatedRoute, private yourService: ClaimService,private router:Router,private PageViewService:PageViewService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageUrl = this.router.url;

        this.PageViewService.logPageView(pageUrl).subscribe(response => {
          console.log('Page view logged:', response);
        });
      }
    });
    const claimId = +this.route.snapshot.paramMap.get('id')!;
    this.claim$ = this.yourService.getClaimById(claimId);
    this.replies$ = this.yourService.getRepliesByClaimId(claimId);
  }
  submitReply() {
    const claimId = +this.route.snapshot.paramMap.get('id')!;
    const message = this.replyMessage.trim();

    if (!message) {
      // Handle empty reply message
      return;
    }

    this.yourService.saveReply(claimId, message).subscribe(
      (response) => {
        // Success: Do something if needed, such as reloading the replies list
        this.reloadReplies();
        this.replyMessage = ''; // Clear reply message after successful submission
      },
      (error) => {
        // Error: Handle error response
        console.error('Error saving reply:', error);
      }
    );
  }

  // Helper method to reload replies after submitting a new reply
  private reloadReplies() {
    const claimId = +this.route.snapshot.paramMap.get('id')!;
    this.replies$ = this.yourService.getRepliesByClaimId(claimId);
  }
  closeClaim() {
    const claimId = +this.route.snapshot.paramMap.get('id')!;

    this.yourService.closeClaim(claimId).subscribe(
      (response) => {
        // Success: Handle success response
        console.log('Claim closed successfully:', response);
        // For example, navigate to a different page or handle success case
      },
      (error) => {
        // Error: Handle error response
        console.error('Error closing claim:', error);
      }
    );
  }

  deleteClaim() {
    const claimId = +this.route.snapshot.paramMap.get('id')!;

    this.yourService.deleteClaim(claimId).subscribe(
      (response) => {
        // Success: Navigate to a different page or handle success case
        console.log('Claim deleted successfully:', response);
        // For example, navigate to a different page after successful deletion
        this.router.navigate(['/front/claims']); // Navigate to dashboard or any other page
      },
      (error) => {
        // Error: Handle error response
        console.error('Error deleting claim:', error);
      }
    );  }
    isClaimClosed(): boolean {
      let isClosed = false;
      this.claim$.subscribe(claim => {
          if (claim && claim.claimStatus === 'Closed') {
              isClosed = true;
          }
      });
      return isClosed;
  }
}
