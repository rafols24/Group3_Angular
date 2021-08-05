import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  
  product: any;
  products: any;
  productDetails: any;


  isShown = false;
  productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
  show:boolean;
 userId:any;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.userId = window.localStorage.getItem('userId');
    console.log(this.userId)
    this.http.get(this.productUrl).subscribe((product:any) => {
        this.product = product.message;  
  
      console.log(this.product);
      


//     this.http.get(this.productUrl).subscribe((data:any) => {
//       this.product = data.message;  
//       data.show = false;
//       return data;
//       console.log(this.product);

//     this.http.get(this.productUrl).subscribe((product:any) => {
//         this.product = product.message;  
//       console.log(this.product);
   

   });
  
  }

  showDetail(product) {
    this.isShown = true;
    console.log(product);
    this.productDetails = product;
    }
    
 
  hideDetail(){
    this.isShown = false;
  }
  
  addToCart(id) {
    this.http.post(`http://127.0.0.1:8000/api/users/${this.userId}/carts`, {
      product_id: id,
      qty: 1
    }).subscribe(res => {
      // this.router.navigateByUrl('user-cart');

      Swal.fire({
        text: 'You order successfully!',
        icon: 'success'
      });
    })
  }

  
}
