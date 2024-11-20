import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { NgFor } from '@angular/common';
import { product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent {
  productCollection:any= [];
  constructor(private productService:ProductService){
    this.productService.getAllProducts().subscribe(x=>{
      this.productCollection = x;
    })
  }
  ngOnInit(){
  }
}
