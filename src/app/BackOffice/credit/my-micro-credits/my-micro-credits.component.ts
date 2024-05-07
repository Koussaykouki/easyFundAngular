import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MicroCreditService } from '../../../services/microcredit.service';
import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';
import * as FileSaver from 'file-saver';
import { EditCreditStatusDialogComponentcomponent } from '../dialog_components/edit-credit-status-dialog-component/edit-credit-status-dialog-componentcomponent';


@Component({
  selector: 'app-my-micro-credits',
  templateUrl: './my-micro-credits.component.html',
  styleUrl: './my-micro-credits.component.css'
})

export class MyMicroCreditsComponent {
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
    // Call the simulator method to fetch simulation data
    this.microCreditService.simulator(credit.creditAmmount, credit.period, credit.typePeriod)
      .subscribe(simulationData => {
        // Combine credit data with simulation data
        const dialogData = {
          credit: credit,
          simulation: simulationData
        };

    console.log(dialogData)

      // Open the dialog with combined data
      const dialogRef = this.dialog.open(MicroCreditDetailsComponent, {
        width: '1200px',
        data: dialogData
      });
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
    this.microCreditService.getCreditByAccount().subscribe({
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


// import { Component } from '@angular/core';
// import { MicroCreditService } from '../../../services/microcredit.service';
// import { Router } from '@angular/router';
// import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';

// @Component({
//   selector: 'app-my-micro-credits',
//   templateUrl: './my-micro-credits.component.html',
//   styleUrl: './my-micro-credits.component.css'
// })
// export class MyMicroCreditsComponent {

//     microCredits : any = [];
//     filteredMicroCredits: any = []; // Array to hold filtered microcredits

//     dialog: any;
//     listCredits: any;
//     lis: any;
//     constructor(private microCreditService: MicroCreditService ,public router: Router) { }
  
//     ngOnInit(): void {
//       this.microCreditService.getCreditByAccount().subscribe(
//         data => {
//           console.log(data);
//           this.microCredits = data;
//           this.filteredMicroCredits = data; // Initialize filteredMicroCredits with all microcredits initially
//         }
//       )
//     }

//     openPopup(credit: any) {
//       const dialogRef = this.dialog.open(MicroCreditDetailsComponent, {
//         width: '1200ox',
//         data: credit
//       });
//     }
    
  
//     /*showDetails(){
//       this.router.navigate(['/creditdetails']);
//     }*/
  

// }
