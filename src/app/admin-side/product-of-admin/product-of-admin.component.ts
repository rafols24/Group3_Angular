import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-product-of-admin',
  templateUrl: './product-of-admin.component.html',
  styleUrls: ['./product-of-admin.component.css']
})
export class ProductOfAdminComponent implements OnInit {

  
  
  product: any;
  products: any;
  productDetails: any;

  isShown = false;
  productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
  show:boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private productservice:ProductService
  ) { }

  ngOnInit(): void {
    this.http.get(this.productUrl).subscribe((product:any) => {
      this.product = product.message;  

    console.log(this.product);
    
 });
  }

  showDetail(product) {
    this.isShown = true;
    this.productDetails = product;
    }

  hideDetail(){
    this.isShown = false;
  }


  //this is for deleting product
  productAdmin;
  deleteProduct(item){
    this.productservice.deleteProduct(item)
        .subscribe(response => {
          console.log(response);
          window.location.reload(); 
        });
  }

}
