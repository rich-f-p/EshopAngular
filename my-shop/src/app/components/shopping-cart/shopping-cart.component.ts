import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  parameter:any = "";
  cartCollection:any=[];
  constructor(private cart:ShoppingCartService,private route:ActivatedRoute){
    this.cart.getShoppingCart(this.parameter).subscribe(x=>{
      console.log(x)
      this.cartCollection = x;
    })
  }

  ngOnInit(){
    this.route.paramMap.subscribe(x=>{
      this.parameter = x.get("id")
    })
  }

}
