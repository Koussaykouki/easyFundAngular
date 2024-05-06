 import { Component, Input ,Inject} from '@angular/core';
import { Offer } from '../../models/Offer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer-pop-up',
  templateUrl: './offer-pop-up.component.html',
  styleUrl: './offer-pop-up.component.css'
})
export class OfferPopUpComponent {
  constructor( public dialogRef: MatDialogRef<OfferPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router: Router) {}
  

  closePopup(): void {
    this.dialogRef.close();
  }
  apply(offer:Offer): void {
    this.dialogRef.close(); // Close the popup first if needed
    this.router.navigate(['/front/demandFinancing', { offer: JSON.stringify(offer) }]); // Navigate to the offer list route
  }
}
 