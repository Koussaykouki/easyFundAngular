import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaimService } from '../../services/claim.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claimslistfront',
  templateUrl: './claimslistfront.component.html',
  styleUrl: './claimslistfront.component.css'
})
export class ClaimslistfrontComponent {
  claims$!: Observable<any>;

  constructor(private ClaimService: ClaimService, private datePipe: DatePipe,private router: Router) { }

  ngOnInit(): void {
    this.claims$ = this.ClaimService.getClaimsAssignedToUser();
  }
}
