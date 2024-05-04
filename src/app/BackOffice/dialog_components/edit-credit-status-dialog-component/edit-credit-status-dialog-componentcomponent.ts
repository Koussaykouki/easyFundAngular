import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MicroCreditService } from '../../../services/microcredit.service';

@Component({
  selector: 'app-edit-credit-status-dialog-component',
  templateUrl: './edit-credit-status-dialog-component.component.html',
  styleUrl: './edit-credit-status-dialog-component.component.css'
})
export class EditCreditStatusDialogComponentcomponent {

  updatedCreditStatus !: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
               public dialogRef: MatDialogRef<EditCreditStatusDialogComponentcomponent>,
               private microCreditService: MicroCreditService){

  }
  
  onSave(): void {
    // Pass the updated credit status back to the list component
    this.dialogRef.close({ ...this.data, creditStatus: this.updatedCreditStatus });
    this.updateCreditStatus(this.data.microCreditId, this.updatedCreditStatus);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  updateCreditStatus(creditId: number, newStatus: string): void {
    this.microCreditService.updateCreditStatus(creditId, newStatus).subscribe({
      next: (updatedCredit) => {
        console.log('Credit status updated successfully:', updatedCredit);
      },
      error: (error) => console.error('Error updating credit status:', error)
    });
  }

}

