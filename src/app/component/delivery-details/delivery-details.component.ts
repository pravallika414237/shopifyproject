import { Component, OnInit } from '@angular/core';

import { CartserviceService } from 'src/app/services/cartservice.service';
@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {
 
  public grandTotal !:number;
 
  constructor(private cartService: CartserviceService) {
    // this.reactiveabc=formboj.group({
      
    //   fname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
    //   lname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   mail:new FormControl('',[Validators.required,Validators.email]),
    //   phone:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
    //   citizen:new FormControl('',[Validators.required]),
    //   c1:new FormControl('',Validators.requiredTrue)
    // })
   }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  
  order(){
alert("order placed successfully... you will shortly recieve a message.")
  }
  
}
