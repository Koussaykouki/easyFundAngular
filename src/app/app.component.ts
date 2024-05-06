import { Component } from '@angular/core';
import { PopupService } from './services/popup.service';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easyFundAngular';
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.open();
    console.log(`popup`);
  }
}
