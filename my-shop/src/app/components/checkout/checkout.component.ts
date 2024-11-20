import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  checkoutForm:FormGroup

  constructor(){
    this.checkoutForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      emailAddress: new FormControl('',[Validators.required,Validators.email]),
      streetAddress: new FormControl('',[Validators.required,Validators.minLength(4)]),
      state: new FormControl('',[Validators.required,Validators.minLength(4)]),
      city: new FormControl('',[Validators.required,Validators.minLength(4)]),
      zip: new FormControl('',[Validators.required,Validators.minLength(4)])
    });
  }

  saveInfo(f:any){
    console.log(f.value)
  }

}
