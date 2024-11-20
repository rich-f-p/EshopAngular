import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  parameter:any =0;
  details:any = {};
  constructor(private route:ActivatedRoute,private productService:ProductService,) {

  }
  ngOnInit(){
    this.route.paramMap.subscribe(x=>{
      this.parameter = x.get("id")
    })
    this.productService.getProductById(this.parameter).subscribe(x=>{

      this.details=x;
    })
  }
}
