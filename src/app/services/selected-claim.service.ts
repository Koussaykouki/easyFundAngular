import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedClaimService {
  private selectedClaimIdSource = new BehaviorSubject<number | null>(null);
  selectedClaimId$ = this.selectedClaimIdSource.asObservable();

  setSelectedClaimId(claimId: number): void {
    this.selectedClaimIdSource.next(claimId);
  }
}
