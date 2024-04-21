import { Component } from '@angular/core';
import { FinancingsService } from '../../services/financings.service';
@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrl: './excel.component.css'
})
export class ExcelComponent {
  constructor(private fileService: FinancingsService) {}

  downloadFile() {
    this.fileService.downloadFile('example.xls').subscribe({
      next :(data) => {
      const blob = new Blob([data], { type: 'application/vnd.xls' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    }, error: (error) => console.log('Error downloading the file')});
  }
}
