import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data-service';
import { closest } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { TreeGrid } from '@syncfusion/ej2-treegrid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid-app.component.html',
  styleUrl: './grid-app.component.css',
  encapsulation: ViewEncapsulation.None

})
export class GridAppComponent {

   /** Configurations for the Grid page */
   constructor(private data: DataService) {
  }

  @ViewChild('scheduleGrid')
  public treegrid!: TreeGrid;

  public yearWiseData: Object[] = this.data.yearWiseData;
  public format: string = 'c0';
  public balanceHideAtMedia: string = '(min-width: 750px)';
  public paymentHideAtMedia: string = '(min-width: 480px)';

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
  }

}
