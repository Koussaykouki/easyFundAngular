import { Component,OnInit } from '@angular/core';
import { FinancingsService } from '../../services/financings.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.css'
})
export class ExcelComponent implements OnInit {
  excelData: any[]=[];
  financing: any[]=[];
  constructor(private fileService: FinancingsService) {}
  ngOnInit(){}
  downloadFile() {
    this.fileService.downloadFile('example.xls').subscribe({
      next :(data) => {
      const blob = new Blob([data], { type: 'application/vnd.xls' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    }, error: (error) => console.log('Error downloading the file')});
  }
  excel(){
    this.fileService.excel(29).subscribe(arrayBuffer => {
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
}
