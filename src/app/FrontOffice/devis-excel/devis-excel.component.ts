import { Component,ViewChild } from '@angular/core';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { ActivatedRoute, Router } from '@angular/router';
'@syncfusion/ej2-angular-spreadsheet';
@Component({
  selector: 'app-devis-excel',
  templateUrl: './devis-excel.component.html',
  styleUrl: './devis-excel.component.css'
})
export class DevisExcelComponent  {
    data:any[]=[];
constructor(private route :ActivatedRoute){}
  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent | undefined;
  
  onCreate(){
    this.route.paramMap.subscribe(params => {
      const offerJson = params.get('offer');
      if (offerJson) {
        this.data= JSON.parse(offerJson) ;
        // Now you have the 'offer' data, you can use it as needed
      }
    });
    console.log(this.data);
  }
}
