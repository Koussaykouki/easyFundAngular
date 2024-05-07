import { Component, OnInit } from '@angular/core';
import { FinancingRequestService } from '../../services/financing-request.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../models/Offer.model';
import { AmortizationRow } from '../../models/amortizationRow.model';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-fiancing-front',
  templateUrl: './fiancing-front.component.html',
  styleUrl: './fiancing-front.component.css'
})
export class FiancingFrontComponent  implements OnInit{
  offer :Offer | null =null;
  starDate:Date| null=null;
  endDate:Date| null=null;
  constructor(private datePipe: DatePipe,private fb: FormBuilder,private financingService:FinancingRequestService,private route :ActivatedRoute,private router: Router,private cookie:CookieService){}
  financingForm : FormGroup = this.fb.group({
    
    offer :[''],
    dateFinancingRequest :[''],
    finalDate: ['']
    
  })
  onSubmit(){
    console.log('submit');
    
    console.log(this.financingForm.value);
    var s = this.datePipe.transform(this.financingForm.get('dateFinancingRequest')?.value, 'yyyy-MM-dd') || '';
    var f = this.datePipe.transform(this.financingForm.get('finalDate')?.value, 'yyyy-MM-dd') || '';
    this.financingForm.patchValue({
      startDate :s,
    endDate: f
    });
    this.financingService.add(this.financingForm.value).subscribe(
      {
        next: (data) => {

          console.log('fiancing added :', data);
        },
        error: (error) => console.error('error adding offer', error)
      });;
      this.router.navigate(['/myfinancing']);
  }
  //Oninit
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const offerJson = params.get('offer');
      if (offerJson) {
        this.offer= JSON.parse(offerJson) as Offer;
        // Now you have the 'offer' data, you can use it as needed
      }
    });
    this.financingForm.patchValue({
      offer : this.offer

 });
   const startDateControl = this.financingForm.get('startDate');
   
    //var s= this.datePipe.transform(startDateControl, 'yyyy-MM-dd') || '';
    
  }
  calculateAmortizationSchedule(
    price:number,datef:Date,dateS:Date
  ):void {
    const amortizationRows: AmortizationRow[] = [];
    //const offer = price;
    
    const  startDate = new Date(dateS);
    const endDate = new Date(datef);
    localStorage.setItem('startDate',JSON.stringify(startDate) );
    localStorage.setItem('endDate', JSON.stringify(endDate));
   console.log('startdate : '+startDate+'endDate : '+endDate+'price : '+price);
  
    let interestRate = 5; // Annual interest rate
    let principal = price;
    const period = this.calculateMonthDifference(startDate, endDate);
    let monthlyInterestRate = interestRate / 12 / 100;
    console.log('period :'+period);
    if (period > 12) {
      const monthsSupplement = period - 12;
      interestRate += 0.1 * monthsSupplement;
    }
  
    if (principal > 1000) {
      const diff = interestRate - 1000;
      const nb = Math.floor(diff / 300);
      interestRate += 0.3 * nb;
    }
  
    monthlyInterestRate = interestRate / 12 / 100;
    const monthlyPayment =
      principal * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -period)));
  
    let currentBalance = principal;
  
    for (let month = 1; month <= period; month++) {
      const interest = currentBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interest;
      const finalBalance = currentBalance - principalPayment;
      const month = startDate.getMonth()+1;
      startDate.setMonth(month);
       const dateString = this.formatDate(startDate);
      amortizationRows.push({
        month: dateString,
        initialBalance: currentBalance,
        interest: interest,
        principal: principalPayment,
        monthlyPayment: monthlyPayment,
        finalBalance: finalBalance,
        status: finalBalance < 0 ? 'Paid Off' : 'Remaining'
      });
  
      currentBalance = finalBalance < 0 ? 0 : finalBalance;
    }
    console.log(amortizationRows);
    this.router.navigate(['/devis',]);
    this.router.navigate(['/devis', { offer: JSON.stringify(amortizationRows) }]);
    //return amortizationRows;
  }
  calculateMonthDifference(startDate: Date, endDate: Date): number {
    var sd = new Date(startDate);
    var ed = new Date(endDate);
    
      const startYear = sd.getFullYear();
    const startMonth = sd.getMonth();
    const endYear = ed.getFullYear();
    const endMonth = ed.getMonth();
    console.log('star y + star m:'+startYear+startMonth+' ||||    end y + end m :'+endYear+endMonth)
  
    return (endYear - startYear) * 12 + (endMonth - startMonth);
    
  }
  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  apply(): void {
     // Close the popup first if needed
    this.router.navigate(['/myfinancing']); // Navigate to the offer list route
  }
}
