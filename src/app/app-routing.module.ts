import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import {ProductsComponent } from './component/products/products.component'
import { LoginComponent } from './component/login/login.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { DeliveryDetailsComponent } from './component/delivery-details/delivery-details.component';
const routes: Routes = [
  {path : '' , redirectTo:'products' , pathMatch: 'full'},
  {path: 'products' ,component:ProductsComponent},
  {path: 'products/cart' ,component:CartComponent},
  {path:'products/viewproduct/:pid',component:ViewProductComponent},
  {path: 'products/login' ,component:LoginComponent},
  
  {path: 'delivery', component:DeliveryDetailsComponent},
  {path: '**' ,component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
