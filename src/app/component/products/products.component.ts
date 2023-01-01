import { Component, OnInit } from '@angular/core';
import{ ApiService } from 'src/app/services/api.service'
import { CartserviceService } from 'src/app/services/cartservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList:any;
searchKey:string="";
public filterCategory:any;
count :number=1;
  constructor(private api : ApiService  ,private cartService: CartserviceService) { }

  ngOnInit(): void {

   this.api.getProductDetails().subscribe(res=>{
    
      this.productList = res;
      this.filterCategory =res;
      this.productList.forEach((a:any)=> {
        if(a.category==="women's clothing" || a.category==="men's clothing"){
          a.category="fashion";
        }
        Object.assign(a,{quantity : this.count, total:a.price});
      })
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey =val;
    })   
  }
addtocart(item:any){
  this.cartService.addtoCart(item);
}
filter(category:string){
  this.filterCategory =this.productList.filter((a:any)=>{
    if(a.category == category ||category==''){
      return a;
    }
  })
}
}
