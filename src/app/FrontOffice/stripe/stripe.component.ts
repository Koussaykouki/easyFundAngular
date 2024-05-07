import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeService } from '../../services/stripe.service';
import { StripeChargeDto } from '../../models/chargeDto.models';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrl: './stripe.component.css'
})
export class StripeComponent implements OnInit {
  id:number=0;
   stripeCharge: StripeChargeDto = {
    stripeToken: 'ok_visa',
    username: '',
    amount: 0,
    success: false,
    message: '',
    chargeId: '',
    additionalInfo: [
      { additionalProp1: 'value1', additionalProp2: 'value2', additionalProp3: 'value3' }
    ]
  };
   requestData = {
    stripeToken: 'ok_visa',
    username: 'user123',
    amount: 100,
    success: false,
    message: 'Payment failed',
    chargeId: '123',
    additionalInfo: {
      additionalProp1: 'value1',
      additionalProp2: 'value2',
      additionalProp3: 'value3'
    }
  };
  constructor( public dialogRef: MatDialogRef<StripeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router: Router,private fb:FormBuilder,private route :ActivatedRoute, private stripe :StripeService) {}
    paymentForm : FormGroup = this.fb.group({
    
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], // Eight digits
      exp: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY format
      mdp: ['', Validators.required],
      id : [''],
      model : ['']
      
    })
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const offerJson = this.data;
      console.log("id : "+offerJson);
      if (offerJson) {
        this.id= JSON.parse(offerJson) ;
        // Now you have the 'offer' data, you can use it as needed
      }
    });
    console.log("id : "+this.id);
    this.paymentForm.patchValue({
      id : this.id,
      model :this.stripeCharge
 });
  }

  closePopup(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    const stripeChargeValue = this.paymentForm.get('model')?.value;
if (stripeChargeValue) {
  console.log('stripeToken:', stripeChargeValue.stripeToken);
  console.log('username:', stripeChargeValue.username);
  console.log('amount:', stripeChargeValue.amount);
  console.log('success:', stripeChargeValue.success);
  console.log('message:', stripeChargeValue.message);
  console.log('chargeId:', stripeChargeValue.chargeId);
}
    console.log('id :'+this.id);
    this.stripe.pay(this.requestData,this.id).subscribe({
      next: (data) => {
        
  
        console.log('payment validée : ', data); 
      },
      error: (error) => console.error('Error de paiement:', error)
    });
     
  }
}
