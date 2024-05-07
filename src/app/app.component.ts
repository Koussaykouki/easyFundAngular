import { Component } from '@angular/core';
import { PopupService } from './services/popup.service';

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
