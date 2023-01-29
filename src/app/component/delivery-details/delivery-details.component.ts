import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {
  public grandTotal !:number; 
   constructor(private cartService: CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  orderPlaced(){
    alert("order placed successfully! THANK YOU.")
    this.cartService.removeAllCart();
  }
}
