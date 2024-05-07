import { Component, OnInit } from '@angular/core';
import { FinancingsService } from '../../services/financings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { saveAs } from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { StripeComponent } from '../stripe/stripe.component';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-my-financings',
  templateUrl: './my-financings.component.html',
  styleUrl: './my-financings.component.css'
})
export class MyFinancingsComponent  implements OnInit{
  excelData: any[]=[];
  financingList:any[]=[]
  id:number=0;
  file1:any ="";
   constructor(private datePipe: DatePipe , private financings :FinancingsService,private route:ActivatedRoute,private dialog: MatDialog,private router: Router,private http: HttpClient,private fileService: FinancingsService){}
 ngOnInit(): void {
  // this.readXLSFile('http://localhost/easyFund/excel/1easy2.xls');
  this.excel();
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
 readXLSFile(url: string): void {
  this.http.get(url, { responseType: 'arraybuffer' }).subscribe((data: ArrayBuffer) => {
    const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
    const firstSheetName: string = workbook.SheetNames[0];
    const worksheet: XLSX.WorkSheet = workbook.Sheets[firstSheetName];
    const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    console.log(jsonData);
  });
}
excel(): void {
  this.fileService.excel(8).subscribe(arrayBuffer => {
    // Now use the binary data directly with the XLSX library
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const currentDate: Date = new Date();
    let paymentCounter: number = 0;
    console.log('data ' + jsonData);
    jsonData.forEach((row: any) => {
      const rowDate: any = new Date(row['Month']); // Assuming 'Month' is a valid date string
      const paymentStatus: string = row['status'];

      // Comparison of the date with the current date
      if (rowDate < currentDate && paymentStatus === 'encore') {
        paymentCounter++;
        console.log(`Payment due for row with date ${rowDate}`);
      }
      console.log('due date ' + rowDate);
      console.log('due date ' + paymentStatus);
    });

    console.log('Number of unpaid rows with past date:', paymentCounter);
  });
}
 
}
