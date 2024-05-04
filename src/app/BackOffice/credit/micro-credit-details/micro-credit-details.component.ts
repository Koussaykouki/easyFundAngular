import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-micro-credit-details',
  templateUrl: './micro-credit-details.component.html',
  styleUrls: ['./micro-credit-details.component.css']
})
export class MicroCreditDetailsComponent {

  guarantorFile: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialogRef: MatDialogRef<MicroCreditDetailsComponent>, private sanitizer: DomSanitizer) {}

  closePopup(): void {
    this.dialogRef.close();
  }

  downloadGuarantorFile() {
    const fileBlob = new Blob([this.guarantorFile], { type: 'application/octet-stream' });
    const fileUrl = URL.createObjectURL(fileBlob);
    // Sanitize the URL to prevent security risks
    return this.sanitizer.bypassSecurityTrustUrl(fileUrl);
    }

}