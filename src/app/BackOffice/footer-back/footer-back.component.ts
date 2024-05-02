import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-footer-back',
  templateUrl: './footer-back.component.html',
  styleUrl: './footer-back.component.css'
})
export class FooterBackComponent {
  constructor() { }

  ngAfterViewInit(): void {
    // Script execution code
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', 'R6wF5LGsKyew3SBvTkILC');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }
}
