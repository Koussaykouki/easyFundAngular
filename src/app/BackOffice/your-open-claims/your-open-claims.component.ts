import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../services/claim.service';
import { SelectedClaimService } from '../../services/selected-claim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-your-open-claims',
  templateUrl: './your-open-claims.component.html',
  styleUrls: ['./your-open-claims.component.css']
})
export class YourOpenClaimsComponent implements OnInit {
  openClaims: any[] = [];
  private subscriptions = new Subscription();

  error: string | null = null;

  constructor(private claimService: ClaimService, private selectedClaimService: SelectedClaimService) { }

  ngOnInit(): void {
    this.loadOpenClaims();
    this.claimService.claimResolved$.subscribe(() => {
      this.loadOpenClaims();
    });
  }

  loadOpenClaims(): void {
    this.claimService.getClaimsAssignedToAgent().subscribe({
      next: (data) => {
        this.openClaims = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error fetching open claims';
        console.error(err);
      }
    });
  }

  onViewClaim(claimId: number): void {
    this.selectedClaimService.setSelectedClaimId(claimId);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
