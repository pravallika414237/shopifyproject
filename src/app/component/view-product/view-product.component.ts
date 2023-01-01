import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartserviceService } from 'src/app/services/cartservice.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
// paramValue:any="";
// // name1:any="";
// // pData:any="";
// // pid:any="";
// // price:any="";
// // descrip:any="";
// // image2:any="";

  constructor(private activatedRouteObject:ActivatedRoute,private productObject:ApiService,private cartService: CartserviceService) { 
   
  
  }
  // "id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
  ngOnInit(): void {
    // this.activatedRouteObject.params.subscribe(result=>{
    //   this.paramValue=result;
    // })
    
    //   this.cartService.getProducts().subscribe(res=>{
    //     this.product =res;
    //     this.grandTotal=this.cartService.getTotalPrice();
    //   })
    }
    // //  this.pData=this.productObject.getProductDetails();
    // this.productObject.getProductDetails().subscribe(res=>{
    //   this.pData= res;
    // })    
    // console.log(JSON.stringify(this.pData));
    // for(let c of this.pData){
    //   console.log(c.title);
    //   console.log("hello");
    //   if(c.id==this.paramValue.pid){
    //     this.name1=c.title;
    //     this.price=c.price;
    //     this.descrip=c.description;
    //     this.image2=c.image;
        
      }

    
   // console.log(this.paramValue.pid);
  


