import { Component,OnInit } from '@angular/core';
import { FinancingsService  } from '../../services/financings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financings',
  templateUrl: './financings.component.html',
  styleUrl: './financings.component.css'
})
export class FinancingsComponent implements OnInit {
  financings: any[] = [];
  id:number=0;
  constructor(private fb: FormBuilder,private offerservice : FinancingsService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];  
    });
    this.getfinancings(this.id);
  }
  getfinancings(id:number){
    this.offerservice.findByOffer(330).subscribe({
      next : (data) => {
        this.financings = data;  
        console.log('financings successfully', data);
        
      },
      error: (error) => console.error('financing errors:', error)
      
  });
}
downloadFile(name:any) {
  this.offerservice.downloadFile(name).subscribe({
    next :(data) => {
    const blob = new Blob([data], { type: 'application/vnd.xls' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }, error: (error) => console.log('Error downloading the file')});
}
excel(){
  this.offerservice.excel().subscribe({
    next :(data) => {
    const blob = new Blob([data], { type: 'application/vnd.xls' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }, error: (error) => console.log('Error downloading the file')});
}
}
