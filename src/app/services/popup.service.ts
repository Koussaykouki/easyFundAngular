import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinancingsService } from './financings.service';
import { FinancingsComponent } from '../BackOffice/financings/financings.component';
import { ExcelComponent } from '../BackOffice/excel/excel.component';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog:MatDialog) { }
  open(){
    this.dialog.open(FinancingsComponent);
  }
}
