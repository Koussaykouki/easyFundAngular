import { Component, OnInit } from '@angular/core';
import { FinancingsService } from '../../services/financings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { saveAs } from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { StripeComponent } from '../stripe/stripe.component';
@Component({
  selector: 'app-my-financings',
  templateUrl: './my-financings.component.html',
  styleUrl: './my-financings.component.css'
})
export class MyFinancingsComponent  implements OnInit{
  financingList:any[]=[]
  id:number=0;
  file1:any ="";
   constructor(private financings :FinancingsService,private route:ActivatedRoute,private dialog: MatDialog,private router: Router){}
 ngOnInit(): void {
  
  
   this.myfinancings();
   console.log(this.financingList);
 }
 myfinancings(){
  this.financings.myFianancing().subscribe({
    next : (data) => {
      this.financingList = data;  
      console.log('financings successfully', data);
      
    },
    error: (error) => console.error('financing errors:', error)
    
});
 }
 downloadFile(name:string){
  console.log('clicked');
  this.financings.downloadFile(name).subscribe({
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
 pay(id:number){
  console.log("id : "+id);
  const dialogRef = this.dialog.open(StripeComponent, {
    width: '1200ox',
    data: id
  });

 }
 
}
