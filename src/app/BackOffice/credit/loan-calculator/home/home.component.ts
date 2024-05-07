import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from '../data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent {

      /** Configurations for the Home page */
      constructor(private data: DataService) {
      }

      @ViewChild('dashboardSection')
      public dashboard!: DashboardComponent;

      public ngOnInit(): void {
      }

      public ngAfterViewInit(): void {
        this.data.dashboard = this.dashboard;
      }

}
