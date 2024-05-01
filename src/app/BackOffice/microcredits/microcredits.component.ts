import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PopupService } from '../../services/popup.service';
import { MicroCreditService } from '../../services/microcredit.service';




@Component({
  selector: 'app-microcredits',
  templateUrl: './microcredits.component.html',
  styleUrl: './microcredits.component.css'
})
export class MicrocreditsComponent implements OnInit {
  show: boolean = false;
  microCredits: any[] = [];

  // microCreditId !: number;
  // startDate !: Date;
  // dueDate !: Date;
  // period!: number;
  // typePeriod !: string;
  creditstatus: string[] = [];
  creditType: string[] = [];

  // creditAmmount!: number;
  // payedAmount !:number;
  // creditRemaining!: number;
  // interestRate !: number;

  guarantorFile !: any;
  // cinGuarantor !: string;

  // idAccount !: number;


  defaultCreditStatus = 'OPEN';
  defaultCreditType = 'MICROCREDIT';

  microcreditForm: FormGroup = this.fb.group({
    startDate: ['', [
      Validators.required,
      // validates date format yyyy-mm-dd with regular expression
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]],
    dueDate: ['', [
      Validators.required,
      // validates date format yyyy-mm-dd with regular expression
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]],

    period: [''],
    interestRate: ['',],

    creditstatus: [''],
    creditType: [''],

    creditAmount: [''],
    guarantorFile: [''],
    cinGuarantor: [''],
    idAccount: ['']
  });

  constructor(private fb: FormBuilder, private microcreditservice: MicroCreditService,) {
    this.creditstatus = ['OPEN', 'ACCEPTED', 'INPROGRESS', 'REFUSED', 'CLOSED', 'ARCHIVED']
    this.creditType = ['MICROCREDIT', 'MICROLEASING']
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
    const formData = this.microcreditForm.value;

      if (formData.invalid) {
        alert('form is invalid')
          return;
      }

      console.log('microcredit form is valid..')
      this.microcreditservice.addMicroCredit(formData).subscribe({
        next: (data) => {
          console.log('Microcredit submitted successfully', data);
          // this.eraseValues();
        },
        error: (error) => console.error('Error submitting Microcredit', error)
      });
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

  isBase64(str: string): boolean {
    if (str.startsWith('data:image')) {
      this.guarantorFile = str;
    }
    return str.startsWith('data:image');

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  eraseValues() {
    this.microcreditForm.reset();
  }

}
