import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../services/claim.service';

@Component({
  selector: 'app-your-open-claims',
  templateUrl: './your-open-claims.component.html',
  styleUrls: ['./your-open-claims.component.css']
})
export class YourOpenClaimsComponent implements OnInit {
  openClaims: any[] = [];
  error: string | null = null;

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.loadOpenClaims();
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
}

