import { Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


export const routes: Routes = [
    {path:'login',loadComponent:()=>import('./components/login/login.component').then(x=>x.LoginComponent)},

    {path:'products',loadComponent:()=>import('./components/product-listing/product-listing.component').then(x=>x.ProductListingComponent)},
    {path:'products/:id',component:ProductDetailsComponent},
    {path:'orderlist',loadComponent:()=>import('./components/orders-list/orders-list.component').then(x=>x.OrdersListComponent)},
    {path:'cart/:id',loadComponent:()=>import('./components/shopping-cart/shopping-cart.component').then(x=>x.ShoppingCartComponent)},
    {path:'checkout',loadComponent:()=>import('./components/checkout/checkout.component').then(x=>x.CheckoutComponent)},
    {path:'order',loadComponent:()=>import('./components/orders-list/orders-list.component').then(x=>x.OrdersListComponent)},
    {path:'',redirectTo:'order',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];
