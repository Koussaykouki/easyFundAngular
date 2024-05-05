import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MicroCreditService } from '../../../services/microcredit.service';
import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';
import * as FileSaver from 'file-saver';
import { EditCreditStatusDialogComponentcomponent } from '../dialog_components/edit-credit-status-dialog-component/edit-credit-status-dialog-componentcomponent';

@Component({
  selector: 'app-micro-credit-list',
  templateUrl: './micro-credit-list.component.html',
  styleUrls: ['./micro-credit-list.component.css']
})
export class MicroCreditListComponent {
  microCredits: any[] = [];

  // Filter options
  typePeriodOptions: string[] = ['Monthly', 'Quarterly', 'Half_Yearly', 'Yearly'];
  creditTypeOptions: string[] = ['MICROCREDIT', 'MICROLEASING'];
  creditStatusOptions: string[] = ['OPEN', 'ACCEPTED', 'INPROGRESS', 'REFUSED', 'CLOSED', 'ARCHIVED'];

  // Selected filter values (initialized to empty strings for 'All' option)
  typePeriodFilter: string = '';
  creditTypeFilter: string = '';
  creditStatusFilter: string = '';

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

  openEditCreditStatusDialog(credit: any) {
    const dialogRef = this.dialog.open(EditCreditStatusDialogComponentcomponent, {
      width: '400px',
      data: credit
    });

    dialogRef.afterClosed().subscribe(updatedCredit => {
      if (updatedCredit) {
        // Update the credit status in the list if it has been changed
        const index = this.microCredits.findIndex(c => c.microCreditId === updatedCredit.microCreditId);
        if (index !== -1) {
          this.microCredits[index] = updatedCredit;
        }
      }
    });
  }

  // Method to filter microCredits based on selected filters
  applyFilters(): void {
    this.microCreditService.showAllCredits().subscribe({
      next: (data) => {
        this.microCredits = data.filter((credit: { typePeriod: string; creditType: string; creditStatus: string; }) =>
          (this.typePeriodFilter === '' || credit.typePeriod === this.typePeriodFilter) &&
          (this.creditTypeFilter === '' || credit.creditType === this.creditTypeFilter) &&
          (this.creditStatusFilter === '' || credit.creditStatus === this.creditStatusFilter)
        );
      },
      error: (error) => console.error('Error fetching credits:', error)
    });
  }

}
