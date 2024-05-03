import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '../../../services/popup.service';
import { MicroCreditService } from '../../../services/microcredit.service';


import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-microcredits',
  templateUrl: './microcredits.component.html',
  styleUrl: './microcredits.component.css'
})
export class MicrocreditsComponent implements OnInit {
  show: boolean = false;
  microCredits: any[] = [];

  creditStatus: string[] = [];
  creditType: string[] = [];
  typePeriode: string[] = [];
  guarantorFile: File[] = [];
  showSuccessMessage: boolean = false;
  countdown: number = 5;

  defaultCreditStatus = 'OPEN';
  defaultCreditType = 'MICROCREDIT';
  defaultPeriodeType = 'MONTHLY';

  microcreditForm: FormGroup = this.fb.group({
    startDate: ['',Validators.required],
    dueDate: ['',Validators.required],

    period: [12,''],
    interestRate: ['',],

    creditStatus: [this.defaultCreditStatus,''],
    creditType: [this.defaultCreditType, ''],
    typePeriode: [this.defaultPeriodeType,''],

    creditAmmount: ['', [Validators.required, Validators.min(100), Validators.max(40000)]],
    cinGuarantor: [''],
    guarantorFile: [''],
  });

  constructor(private fb: FormBuilder, private microcreditservice: MicroCreditService, private router: Router
             
   ) {
    this.creditStatus = ['OPEN', 'ACCEPTED', 'INPROGRESS', 'REFUSED', 'CLOSED', 'ARCHIVED']
    this.creditType = ['MICROCREDIT', 'MICROLEASING']
    this.typePeriode = ['MONTHLY' ,'QUARTERLY' ,'HALF-YEARLY', 'YEARLY']
  }

  
  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.guarantorFile.push(...event.addedFiles);
  }
  
  onRemove(event: File) {
    console.log(event);
    this.guarantorFile.splice(this.guarantorFile.indexOf(event), 1);
  }

  getCredits() {
    this.microcreditservice.showAllCredits().subscribe({
      next: (data) => {
        this.microCredits = data;
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error)
    });
  }

  onSubmit() {
    console.log('Form Valid:', this.microcreditForm.valid);
    console.log('Form Control Validity:', this.microcreditForm.controls);
    console.log('Form Control Values:', this.microcreditForm.value);

    if (this.microcreditForm.invalid) {
      alert('Form is invalid');
      return;
    }
    console.log('Microcredit form is valid..');
    this.microcreditservice.addMicroCredit(this.microcreditForm.value).subscribe({
      next: (data) => {

        console.log('Microcredit submitted successfully', data);
       
        // Show the success message
        this.showSuccessMessage = true;
        
        // Start the countdown
        // const countdownInterval = setInterval(() => {
        //   this.countdown--;
    
        //   // Redirect when countdown reaches 0
        //   if (this.countdown === 0) {
        //     clearInterval(countdownInterval);
        //     this.router.navigate(['/']); // Replace 'your-redirect-route' with your actual route
        //   }
        //       }, 1000);    
            }
          }
        )
      // console.log('microcredit form is valid..')
      // this.microcreditservice.addMicroCredit(formData).subscribe({
      //   next: (data) => {
      //     console.log('Microcredit submitted successfully', data);
      //     // this.eraseValues();
      //   },
      //   error: (error) => console.error('Error submitting Microcredit', error)
      // });
  }

  delete(id: number) {
    this.microcreditservice.deleteCredit(id).subscribe({
      next: (data) => {
        console.log('microCredit deleted', data);
      },
      error: (error) => console.error('Error deleting MicroCredit', error)
    });
    this.microCredits = this.microCredits.filter(Microcredit => Microcredit.microCreditId !== id);
    this.getCredits();
  }



  openPopup() {
    this.show = true;
    console.log('pop -up:');
  }

  status(status: string) {
    this.microcreditservice.creditByStaus(status).subscribe({
      next: (data) => {
        this.microCredits = data;
      },
      error: (error) => console.error('error getting status', status)
    });
    this.getCredits();
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  closePopup(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.show = false;
  }

  ngOnInit(): void {
    // this.getCredits(); // Fetch initial data when the component initializes
  }


  eraseValues() {
    this.microcreditForm.reset();
  }

}
