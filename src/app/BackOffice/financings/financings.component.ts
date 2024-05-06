import { Component,OnInit,Inject } from '@angular/core';
import { FinancingsService  } from '../../services/financings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import{PopupService} from '../../services/popup.service';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { saveAs } from 'file-saver';
import { FinancingRequestService } from '../../services/financing-request.service';
@Component({
  selector: 'app-financings',
  templateUrl: './financings.component.html',
  styleUrl: './financings.component.css'
})
export class FinancingsComponent implements OnInit {
  financings: any[] = [];
  id:number=0;
  excelData: any[]=[];
  file1:any ="";
  user:any;
  constructor(public dialogRef: MatDialogRef<FinancingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router: Router,private fb: FormBuilder,private offerservice : FinancingsService,private route: ActivatedRoute,private popupService: PopupService, private financing:FinancingRequestService) {
      
    }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];  
    });
    const numberValue1: number = Number(this.data);
    console.log('id dended :'+numberValue1);
    console.log('id dended :'+this.data);
    this.getfinancings(this.data);
  }
  getfinancings(id:number){
    this.offerservice.findByOffer(id).subscribe({
      next : (data) => {
        this.financings = data;  
        this.financings.forEach(fr => {
          this.getUser(fr.financingRequestId); // Fetch and store user IDs
        });
        console.log('financings successfully', data);
        
      },
      error: (error) => console.error('financing errors:', error)
      
  });
}
downloadFile(name:any) {
  this.offerservice.downloadFile(name).subscribe({
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
excel(name:any){
  this.offerservice.excel(name).subscribe(arrayBuffer => {
    // Convert ArrayBuffer to Binary String
    const data = new Uint8Array(arrayBuffer);
    let binaryString = '';
    data.forEach((byte) => {
      binaryString += String.fromCharCode(byte);
    });
     console.log(binaryString);
    // Now use the binary string with the XLSX library
    const workbook = XLSX.read(binaryString, { type: 'binary' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  });
}
openPopup() {
  this.popupService.open();
  console.log(`popup`);
}
closePopup(): void {
  this.dialogRef.close();
}
getUser(id:number){
  this.financing.findUser(id).subscribe({
    next: (data) => {
     // this.financings = data;
       this.user=data;
      console.log('User detedcted', data);
    },
    error: (error) => console.error('user non detected:', error)
  });
 }
}
