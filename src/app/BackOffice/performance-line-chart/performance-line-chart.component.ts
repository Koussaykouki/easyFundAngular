import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-performance-line-chart',
  templateUrl: './performance-line-chart.component.html',
  styleUrls: ['./performance-line-chart.component.css']
})
export class PerformanceLineChartComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.fetchDataAndUpdateChart();
  }

  fetchDataAndUpdateChart() {
    this.statisticsService.getViewsForLast7Days().subscribe(data => {
      // Initialize ECharts instance
      const chartElement = document.getElementById('performance-line-chart');
      const chart = echarts.init(chartElement);

      // Extract labels and values from the data
      const labels = Object.keys(data);
      const values = Object.values(data);

      // Define chart options
      const options = {
        xAxis: {
          type: 'category',
          data: labels
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: values,
          type: 'line'
        }]
      };

      // Set chart options and render chart
      chart.setOption(options);
    });
  }
}
