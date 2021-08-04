import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


//   product: any;
//   isShown = false;
//   productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
//   show:boolean;

  isShown = false;
  show:boolean;
  
  product: any;

  productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
 

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.productUrl).subscribe((data:any) => {
      this.product = data.message;  
      data.show = false;
      return data;
      console.log(this.product);
   });
  }
  showDetail(product) {
    this.isShown = true;
    this.product = product;
    }

  hideDetail(){
    this.isShown = false;
  }
}
