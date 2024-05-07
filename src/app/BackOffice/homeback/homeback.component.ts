import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { MicroCreditService } from '../../services/microcredit.service';

@Component({
  selector: 'app-homeback',
  templateUrl: './homeback.component.html',
  styleUrls: ['./homeback.component.css']
})
export class HomebackComponent implements OnInit {
  todayViews!: number;
  percentageChange!: number;
  microCredits: any[] = [];
  kpis: any = {};

  constructor(
    private statisticsService: StatisticsService,
    private microCreditService: MicroCreditService
  ) {}

  ngOnInit() {
    this.getMicroCredits();
    this.fetchTodayStatistics();
  }

  getMicroCredits() {
    this.microCreditService.showAllCredits().subscribe({
      next: (data) => {
        this.microCredits = data;
        this.calculateKPIs(); // Calculate KPIs after fetching microcredits
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching credits:', error)
    });
  }

  fetchTodayStatistics() {
    this.statisticsService.getTodayStatistics().subscribe(data => {
      this.todayViews = data.todayViews;
      this.percentageChange = data.percentageChange;
    });
  }

  calculateKPIs() {
    this.kpis = {
      totalMicrocredits: this.microCredits.length,
      totalMicrocreditAmount: this.microCredits.reduce((total, credit) => total + credit.creditAmmount, 0),
      averageCreditPeriod: this.calculateAverageCreditPeriod(),
      totalInterestEarned: this.calculateTotalInterestEarned(),
      totalOverdueAmount: this.calculateTotalOverdueAmount()
    };
  }

  private calculateAverageCreditPeriod(): number {
    let totalPeriod = this.microCredits.reduce((total, credit) => total + credit.period, 0);
    return totalPeriod / this.microCredits.length;
  }

  private calculateTotalInterestEarned(): number {
    return this.microCredits.reduce((totalInterest, credit) => {
      let interest = (credit.creditAmmount * credit.interestRate * credit.period) / 100;
      return totalInterest + interest;
    }, 0);
  }

  private calculateTotalOverdueAmount(): number {
    return this.microCredits.reduce((totalOverdue, credit) => {
      if (credit.creditStatus === 'OPEN' && new Date(credit.dueDate) < new Date()) {
        return totalOverdue + (credit.creditAmmount - credit.payedAmount);
      }
      return totalOverdue;
    }, 0);
  }
}
