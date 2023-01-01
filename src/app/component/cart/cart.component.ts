import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any =[];
  public grandTotal !:number;
  constructor(private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product =res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any)
{
  this.cartService.removeCartItem(item);
}
emptycart(){
  
  this.cartService.removeAllCart();
}
}
