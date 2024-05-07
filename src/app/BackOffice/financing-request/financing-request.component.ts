import { Component,OnInit } from '@angular/core';
import { FinancingRequestService } from '../../services/financing-request.service';
import { FinancingsService } from '../../services/financings.service';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OfferPopUpComponent } from '../offer-pop-up/offer-pop-up.component';
import { Offer } from '../../models/Offer.model';
import { OfferService } from '../../services/offer.service';
@Component({
  selector: 'app-financing-request',
  templateUrl: './financing-request.component.html',
  styleUrl: './financing-request.component.css'
})
export class FinancingRequestComponent implements OnInit {
  items: ItemModel[] = [];
  action: ItemModel[] = [];
  financings: any[] =[];
  user :any;
  file1:any ="";
  offer:any;
  
  constructor(private financingService : FinancingRequestService,financingsS:FinancingsService,private dialog:MatDialog,private offerService :OfferService){
     
  }
  ngOnInit(): void {
    this.getFinancings();
    this.items=[
      { text: 'ACCEPTED', id: '1' },
    { text: 'CLOSE', id: '2' }];
    this.action=[
      { text: 'APPROVE', id: '1' },
    { text: 'Refuse', id: '2' }];
  }
   getFinancings(){
    this.financingService.findAll().subscribe({
      next: (data) => {
        this.financings = data;
        this.financings.forEach(fr => {
          this.getUser(fr.financingRequestId); // Fetch and store user IDs
        });
        
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error)
    });
   }
   getUser(id:number){
    this.financingService.findUser(id).subscribe({
      next: (data) => {
       // this.financings = data;
         this.user=data;
        console.log('User detedcted', data);
      },
      error: (error) => console.error('user non detected:', error)
    });
   }
   downloadFile(name:string){
    this.financingService.downloadFile(name).subscribe({
      next :(data) => {
        
       
      const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
     // saveAs(blob,name);
     const now = new Date();
     const year = now.getFullYear().toString();
     const month = (now.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
     const day = now.getDate().toString().padStart(2, '0');
     this.file1=year+'-'+month+'-'+day+''+name;
     console.log(name);
     saveAs(blob,this.file1);
      console.log(blob);
      const url= window.URL.createObjectURL(blob);
      //window.open(url);
    }, error: (error) => console.log('Error downloading the file')});
   }
   getStatus(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'yellow';
      case 'ACCEPTED':
        return 'green';
      case 'ARCHIED':
        return 'black';
      default:
        return 'blue';
    }
  }
  onItemSelect(event: { item: ItemModel }): void {
    console.log('Item selected:', event.item.text); // Check if this line is executed
    switch (event.item.id) {
      case 'item1':
        console.log('Item 1 clicked');
        break;
      case 'item2':
        console.log('Item 2 clicked');
        break;
      default:
        console.log('Unknown item clicked:', event.item.id); // Check if this line is executed for debugging
        break;
    }
  }
  geBytStatus(status:string){
    this.financingService.findByStatus(status).subscribe({
      next: (data) => {
        this.financings = data;
        this.financings.forEach(fr => {
          this.getUser(fr.financingRequestId); // Fetch and store user IDs
        });
        
        console.log('Data fetched successfully', data);
      },
      error: (error) => console.error('Error fetching messages:', error)
    });
  }
  approve(id:number,status:string){

    this.financingService.approve(id,status,Number(this.user)).subscribe({
      next: (data) => {
        this.getFinancings();
       
        console.log('approved ', data);
      },
      error: (error) => console.error('failed :', error)
    });
  }
  delet(id:number){
    this.financingService.delete(id).subscribe({
      next: (data) => {
        this.getFinancings();
       
        console.log('deleted  ', data);
      },
      error: (error) => console.error('failed  to delete:', error)
    });
  }
  openDetails(id: number) {
    this.offerService.byId(id).subscribe({
      next: (data) => {
        this.offer=data;
       
        console.log('detected  ', data);
      },
      error: (error) => console.error('failed  to detect:', error)
    });
    const dialogRef = this.dialog.open(OfferPopUpComponent, {
      width: '1200ox',
      data: this.offer
    });
}
}