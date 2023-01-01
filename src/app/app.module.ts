import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CustompipePipe } from './pipes/custompipe.pipe';
import { FormsModule  ,ReactiveFormsModule} from '@angular/forms';
import { DeliveryDetailsComponent } from './component/delivery-details/delivery-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    ViewProductComponent,
    PageNotFoundComponent,
    CustompipePipe,
    DeliveryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
