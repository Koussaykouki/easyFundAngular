import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

@Component({
  selector: 'app-bar-chart-top-urls',
  templateUrl: './bar-chart-top-urls.component.html',
  styleUrl: './bar-chart-top-urls.component.css'
})
export class BarChartTopUrlsComponent {
  topUrls: { url: string; visits: number }[] = [];

  constructor(private statisticsService: StatisticsService) { }
  ngOnInit() {
    this.statisticsService.getTopUrls().subscribe((data: { [key: string]: number }) => {
      this.topUrls = Object.entries(data).map(([url, visits]: [string, number]) => ({ url, visits }));
      this.initChart();
    });
  }

  initChart(): void {
    const chart = echarts.init(document.getElementById('bar-chart'));
    chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: this.topUrls.map(item => item.url),
        axisLabel: {
          interval: 0,
          rotate: 45
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.topUrls.map(item => item.visits),
        type: 'bar'
      }]
    });
  }
}
