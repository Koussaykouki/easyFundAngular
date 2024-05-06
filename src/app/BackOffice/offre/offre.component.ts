import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FinancingsComponent } from '../financings/financings.component';
import { OfferPopUpComponent } from '../offer-pop-up/offer-pop-up.component';
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

  constructor(private fb: FormBuilder, private offerservice: OfferService,private router:Router,private dialog:MatDialog) {
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

  onFileChange(event: Event): void {
    const eventTarget = event.target as HTMLInputElement;
  if (eventTarget.files && eventTarget.files.length > 0) {
    const file = eventTarget.files[0];
    const fullPath = eventTarget.value; // This should contain the full path, but it may be sanitized by the browser
    const fileName = file.name;
   console.log('filepath : '+fullPath);
    var reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.imageUrl = (<FileReader>event.target).result ;
      console.log('filepath : '+this.imageUrl);
      const base = this.imageUrl.replace('data:image/png;base64,','');
      this.offerForm.get('offerImage')?.setValue(this.imageUrl);
     const aaa=  atob(decodeURIComponent(this.imageUrl));
      if(this.isBase64(this.imageUrl)){
        
        var test = atob(this.imageUrl);
        console.log('decoded: '+aaa);
        
      }
       
      
    
    }

    reader.readAsDataURL(eventTarget.files[0]);
    
    // Set the form control value to the full path if available, otherwise set it to just the file name
    
  }}
  onSubmit() {
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
  }
  /*onSubmit() {
    const formData = new FormData();
    
    // Append all other form fields
    Object.keys(this.offerForm.value).forEach(key => {
        if (key !== 'offerImage') {
            formData.append(key, this.offerForm.value[key]);
        }
    });

    // Handle the file upload
    const fileInput = this.offerForm.get('offerImage');
    if (fileInput && fileInput.value) {
        const file: File = (fileInput.value.files ? fileInput.value.files[0] : null);
        if (file) {
            formData.append('offerImage', file, file.name);
        }
    }

    // Use your service to send formData to your server
    this.offerservice.addOffer(formData).subscribe({
        next: (data) => {
            console.log('Offer added:', data);
        },
        error: (error) => {
            console.error('Error adding offer', error);
        }
    });
}*/
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
