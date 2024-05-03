import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-micro-credit-details',
  templateUrl: './micro-credit-details.component.html',
  styleUrls: ['./micro-credit-details.component.css']
})
export class MicroCreditDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<MicroCreditDetailsComponent>) {}

  closePopup(): void {
    this.dialogRef.close();
  }

}