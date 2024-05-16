import { Component } from '@angular/core';
import { Subscription, interval, startWith, switchMap } from 'rxjs';
import { ClaimService } from '../../services/claim.service';

@Component({
  selector: 'app-closed-claims',
  templateUrl: './closed-claims.component.html',
  styleUrl: './closed-claims.component.css'
})
export class ClosedClaimsComponent {
  claims: any[] = [];
  error: string | null = null;
  private refreshSubscription!: Subscription;

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    // Starts the interval immediately and refreshes every 30000 milliseconds (30 seconds)
    this.refreshSubscription = interval(30000)
      .pipe(
        startWith(0), // Start immediately on component initialization
        switchMap(() => this.claimService.getAllClosedClaims())
      )
      .subscribe({
        next: (data) => {
          this.claims = data;
          this.error = null;
        },
        error: (err) => {
          this.error = 'Error fetching claims';
          console.error(err);
        }
      });
  }

  loadClaims(): void {
    this.claimService.getAllClosedClaims().subscribe({
      next: (data) => {
        this.claims = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error fetching claims';
        console.error(err);
      }
    });
  }
  getStatusColor(status: string): string {
    // Define your logic to determine the color based on status
    switch (status) {
      case 'In progress':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'danger';
      default:
        return 'primary';
    }
  }
  reopenClaim(claimId: number): void {
    this.claimService.reopenClaim(claimId).subscribe({
      next: () => {
        console.log('Claim resolved successfully');
        // Optionally, reload the claims after resolving
        this.loadClaims();
        
      },
      error: (err) => {
        console.error('Error resolving claim:', err);
        // Handle error as needed
      }
    });
  }
  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

}
