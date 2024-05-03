import { Component } from '@angular/core';
import { SidebarBackComponent } from '../sidebar-back/sidebar-back.component';
@Component({
  selector: 'app-claims-all',
  templateUrl: './claims-all.component.html',
  styleUrl: './claims-all.component.css'
})
export class ClaimsAllComponent {
  refreshOpenClaims(claimId: number): void {
    // Perform refresh action here using the claimId...
  }
}
