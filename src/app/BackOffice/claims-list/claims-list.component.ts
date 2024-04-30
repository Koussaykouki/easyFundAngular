import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../services/claim.service';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {

  claims: any[] = [];
  error: string | null = null;

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.loadClaims();
  }

  loadClaims(): void {
    this.claimService.getAllOpenClaims().subscribe({
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
  resolveClaim(claimId: number): void {
    this.claimService.takeClaim(claimId).subscribe({
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
}
