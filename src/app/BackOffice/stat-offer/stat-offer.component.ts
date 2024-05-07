import { Component,OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ParametreService } from '../../services/parametre.service';
export interface ElementInfo {
  id: number;
  time: number;
}

@Component({
  selector: 'app-stat-offer',
  templateUrl: './stat-offer.component.html',
  styleUrl: './stat-offer.component.css'
})
export class StatOfferComponent implements OnInit {
  chartInstance: any;
  info : ElementInfo[]=[];
  constructor(private parametre:ParametreService){}
  
  ngOnInit(): void {
   
    this.chart();
   //this.loadData();
  }
  initChart(): void {
    const chartElement = document.getElementById('chart');
    this.chartInstance = echarts.init(chartElement);
  }
 
  chart(){
  this.parametre.getAll().subscribe({next: (data) => {
    console.log('donnéés:'+data);
      // Initialize ECharts instance
      const chartElement = document.getElementById('chart');
      const chart = echarts.init(chartElement);
     
    // let yu =parseFloat(data);
     //console.log('parse:'+yu);
     console.log('info:'+this.info);
    // this.loadData();
     console.log('info:'+this.info);
      // Extract labels and values from the data
      const labels = Object.keys(data);
      const values =   Object.values(data);
      console.log('labels :'+labels);
      console.log(' values:'+values);
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
      chart.setOption(options);},
      error: (error) => console.error('error adding offer', error)
    });
  }

}
