import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MicroCreditService } from '../../../services/microcredit.service';
import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';

@Component({
  selector: 'app-micro-credit-list',
  templateUrl: './micro-credit-list.component.html',
  styleUrl: './micro-credit-list.component.css'
})
export class MicroCreditListComponent {
  microCredits: any[] = [];

  constructor(private microCreditService: MicroCreditService, private dialog: MatDialog ) { }

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

  deleteCredit(id: number) {
    // Implement deletion logic if needed
  }
  
  openPopup(credit: any) {
    const dialogRef = this.dialog.open(MicroCreditDetailsComponent, {
      width: '1200ox',
      data: credit
    });
  }
  
}
