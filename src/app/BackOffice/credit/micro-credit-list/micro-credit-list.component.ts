import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MicroCreditService } from '../../../services/microcredit.service';
import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-micro-credit-list',
  templateUrl: './micro-credit-list.component.html',
  styleUrl: './micro-credit-list.component.css'
})
export class MicroCreditListComponent {
  microCredits: any[] = [];

  constructor(private microCreditService: MicroCreditService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMicroCredits();
  }

  getMicroCredits() {
    this.microCreditService.showAllCredits().subscribe({
      next: (data) => {
        this.microCredits = data;
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching credits:', error)
    });
  }

  downloadCreditExcel(credit: any) {
    this.microCreditService.exportCreditToExcel(credit.creditAmmount, credit.period, credit.typePeriod).subscribe({
      next: (data) => {
        FileSaver.saveAs(data, 'Redressage Credit N°'+credit.microCreditId+'.xlsx');
        console.log('Excel Downloaded sucessfully');
      },
      error: (error) => console.error('Error Downloading Excel Credit:', error)
    });
  }

  deleteCredit(id: number) {
    this.microCreditService.deleteCredit(id).subscribe({
      next: (data) => {
        console.log('MicroCredit deleted', data);
        this.getMicroCredits()
      },
      error: (error) => console.error('Error deleting MicroCredit from list', error)
    });
  }

  openPopup(credit: any) {
    const dialogRef = this.dialog.open(MicroCreditDetailsComponent, {
      width: '1200ox',
      data: credit
    });
  }

}
