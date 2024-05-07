import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageViewService } from '../../services/page-view.service';

@Component({
  selector: 'app-homefront',
  templateUrl: './homefront.component.html',
  styleUrl: './homefront.component.css'
})
export class HomefrontComponent {
  constructor(private router: Router, private pageViewService: PageViewService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageUrl = this.router.url;

        this.pageViewService.logPageView(pageUrl).subscribe(response => {
          console.log('Page view logged:', response);
        });
      }
    });
  }
}
