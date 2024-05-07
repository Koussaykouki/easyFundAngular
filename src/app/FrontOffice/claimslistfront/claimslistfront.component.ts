import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimService } from '../../services/claim.service';
import { DatePipe } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { PageViewService } from '../../services/page-view.service';


@Component({
  selector: 'app-claimslistfront',
  templateUrl: './claimslistfront.component.html',
  styleUrl: './claimslistfront.component.css'
})
export class ClaimslistfrontComponent {
  claims$!: Observable<any>;

  constructor(private ClaimService: ClaimService, private datePipe: DatePipe,private router: Router,private PageViewService:PageViewService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageUrl = this.router.url;

        this.PageViewService.logPageView(pageUrl).subscribe(response => {
          console.log('Page view logged:', response);
        });
      }
    });
    this.claims$ = this.ClaimService.getClaimsAssignedToUser();
  }
}
