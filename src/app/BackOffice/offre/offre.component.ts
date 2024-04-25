import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit {
  show: boolean = false;
  offers: any[] = [];
  financings: any[] = [];
  statusOffer: string[] = [];
  selectedstatus: string = '';
  image: any;
  offerForm: FormGroup = this.fb.group({
    offerDescription: ['', Validators.required],
    offerLink: ['', Validators.required],
    offerPrice: [0, [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]],
    offerStatus: ['', Validators.required],
    offerCategory: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private offerservice: OfferService,) {
    this.statusOffer = ['PENDING', 'ARCHIVED', 'ACTIVE']
    this.getOffers();
  }

  ngOnInit() {
    this.getOffers();

  }

  onSubmit() {
    const formData = this.offerForm.value;

    this.offerservice.addOffer(this.offerForm.value).subscribe(
      {
        next: (data) => {

          console.log('offer added:', data);
        },
        error: (error) => console.error('error adding offer', error)
      });


    console.log(this.offerForm.value);
  }
  getOffers() {

    this.offerservice.showAll().subscribe({
      next: (data) => {
        this.offers = data;

        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error)
    });
  }
  delete(id: number) {
    this.offerservice.delete(id).subscribe({
      next: (data) => {

        console.log('offer deleted', data);
      },
      error: (error) => console.error('Error deleting offer', error)
    });
    this.offers = this.offers.filter(offer => offer.offreId !== id);
    this.getOffers();
  }
  scrap() {
    this.offerservice.srap().subscribe({
      next: (data) => {
        this.offers = data;
        console.log('scrap:', data);

      },
      error: (error) => console.error('error adding offer', error)
    });
    this.getOffers();
  }
  deleteAll() {
    this.offerservice.deleteAll().subscribe({
      next: (data) => {

        console.log('offer deleted', data);
      },
      error: (error) => console.error('Error deleting offer', error)
    });

    this.getOffers();
  }
  getfinancings(id: number) {
    this.offerservice.getfinancings(id).subscribe({
      next: (data) => {
        this.financings = data;
        console.log('financings successfully', data);

      },
      error: (error) => console.error('financing errors:', error)

    });
    this.show = true;
    this.openPopup();
  }
  openPopup() {
    this.show = true;
    console.log('pop -up:');
  }

  closePopup(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.show = false;
  }
  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
  status(status: string) {
    this.offerservice.bystaus(status).subscribe({
      next: (data) => {
        this.offers = data;
        console.log('get stautus:', data);

      },
      error: (error) => console.error('error getting status', status)
    });
    this.getOffers();
  }
  getStatus(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'yellow';
      case 'ACTIVE':
        return 'green';
      case 'ARCHIED':
        return 'black';
      default:
        return 'blue';
    }
  }
  isBase64(str: string): boolean {
    if(str.startsWith('data:image')){
      this.image=str;
    }
    return str.startsWith('data:image');
    
  }
}
