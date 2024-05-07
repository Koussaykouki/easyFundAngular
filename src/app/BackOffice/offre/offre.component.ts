import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FinancingsComponent } from '../financings/financings.component';
import { OfferPopUpComponent } from '../offer-pop-up/offer-pop-up.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit ,AfterViewInit {
  @ViewChild('actionSelect') actionSelect!: ElementRef;
  selectedOption: string = 'Choose Action';
  show: boolean = false;
  offers: any[] = [];
  financings: any[] = [];
  statusOffer: string[] = [];
  selectedstatus: string = '';
  image: any;
  imageUrl: any;
  offerForm: FormGroup = this.fb.group({
    offerDescription: ['', Validators.required],
    offerLink: ['', Validators.required],
    offerPrice: [0, [Validators.required, Validators.pattern(/^\d*\.?\d+TND/)]],
    offerStatus: ['', Validators.required],
    offerCategory: ['', Validators.required],
    offerImage: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private offerservice: OfferService,private router:Router,private dialog:MatDialog, private http: HttpClient) {
    this.statusOffer = ['PENDING', 'ARCHIVED', 'ACTIVE']
    //this.getOffers();
  }
  //drop down button 
  ngAfterViewInit() {
    this.actionSelect.nativeElement.on('hidden.bs.dropdown', () => {
      // Update the selected option when the dropdown is hidden
      this.selectedOption = this.actionSelect.nativeElement.find('.dropdown-item').text().trim();
    });
  }

  ngOnInit() {
    this.getOffers();
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.offerForm.get('offerImage')?.setValue(file);
    }
  }
  //fonctionelle #############################################################################
 /* onSubmit() {
    const formData = this.offerForm.value;
   
    const fileInput = this.offerForm.get('offerImage') ;
    console.log(fileInput);

     console.log(formData);
    this.offerservice.addOffer(this.offerForm.value).subscribe(
      {
        next: (data) => {

          console.log('offer added:', data);
        },
        error: (error) => console.error('error adding offer', error)
      });


    console.log(this.offerForm.value);
  }*/

 
  onSubmit(): void {
   
    const formData = new FormData();
    formData.append('offerDescription', this.offerForm.get('offerDescription')?.value);
    formData.append('offerLink', this.offerForm.get('offerLink')?.value);
    formData.append('offerPrice', this.offerForm.get('offerPrice')?.value);
    formData.append('offerImage', this.offerForm.get('offerImage')?.value);
    formData.append('offerStatus', this.offerForm.get('offerStatus')?.value);
    formData.append('offerCategory', this.offerForm.get('offerCategory')?.value);
    
    // Appeler le service pour soumettre l'offre
    this.offerservice.submitOffer(formData).subscribe(
     {next: (data) => {
      this.offers = data;
      //this.offerForm.reset();
      console.log('Offer approved successfully', data);
    },
    error: (error) => console.error('Error approving offer:', error)
  });

  }

  approve(id : number,status:string){
    
    this.offerservice.approve(id,status).subscribe({
      next: (data) => {
        this.offers = data;
        
        console.log('Offer approved successfully', data);
      },
      error: (error) => console.error('Error approving offer:', error)
    });
    this.getOffers();
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
  openPopup(id: any) {
    const dialogRef = this.dialog.open(FinancingsComponent, {
      width: '1200ox',
      data: id
    });
  }
  openDetails(offer: any) {
    const dialogRef = this.dialog.open(OfferPopUpComponent, {
      width: '1200ox',
      data: offer
    });
  }
}
