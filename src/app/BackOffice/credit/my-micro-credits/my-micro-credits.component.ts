import { Component } from '@angular/core';
import { MicroCreditService } from '../../../services/microcredit.service';
import { Router } from '@angular/router';
import { MicroCreditDetailsComponent } from '../micro-credit-details/micro-credit-details.component';

@Component({
  selector: 'app-my-micro-credits',
  templateUrl: './my-micro-credits.component.html',
  styleUrl: './my-micro-credits.component.css'
})
export class MyMicroCreditsComponent {

    microCredits : any = [];
    dialog: any;
    constructor(private microCreditService: MicroCreditService ,public router: Router) { }
  
    ngOnInit(): void {
      this.microCreditService.getCreditByAccount().subscribe(
        data => {
          console.log(data);
          this.microCredits=data;
        }
      )
    }

    openPopup(credit: any) {
      const dialogRef = this.dialog.open(MicroCreditDetailsComponent, {
        width: '1200ox',
        data: credit
      });
    }
    
  
    /*showDetails(){
      this.router.navigate(['/creditdetails']);
    }*/
  

}
