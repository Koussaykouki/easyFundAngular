import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css']
})
export class UserDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDetailDialogComponent>, // Handle the dialog reference
    @Inject(MAT_DIALOG_DATA) public data: any  // Injecting data passed to the dialog
  ) { }

  // Method to close the dialog
  onClose(): void {
    this.dialogRef.close();
  }
  
  
}
