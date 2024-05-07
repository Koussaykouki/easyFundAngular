import { Component,OnInit } from '@angular/core';
import { FinancingRequestService } from '../../services/financing-request.service';
import { FinancingsService } from '../../services/financings.service';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-financing-request',
  templateUrl: './financing-request.component.html',
  styleUrl: './financing-request.component.css'
})
export class FinancingRequestComponent implements OnInit {
  financings: any[] =[];
  user :any;
  file1:any ="";
  constructor(private financingService : FinancingRequestService,financingsS:FinancingsService){}
  ngOnInit(): void {
    this.getFinancings();
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
}
