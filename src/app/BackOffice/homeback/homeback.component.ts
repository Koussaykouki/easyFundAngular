import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';


@Component({
  selector: 'app-homeback',
  templateUrl: './homeback.component.html',
  styleUrl: './homeback.component.css'
})
export class HomebackComponent {
  todayViews!: number;
  percentageChange!: number;
 

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.fetchTodayStatistics();
    
  }

  fetchTodayStatistics() {
    this.statisticsService.getTodayStatistics().subscribe(data => {
      this.todayViews = data.todayViews;
      this.percentageChange = data.percentageChange;
    });
  }
  
}
