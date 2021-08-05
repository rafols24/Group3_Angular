import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {FormsModule} from '@angular/forms';
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  products: any
  selectedProductIds:any = []
  allIsSelected:boolean = false
  total:number = 0

  constructor(
    private http: HttpClient,
    private productservice: ProductService
  ) { }

  userId:any;
  checkOutForm:any = FormGroup;

  ngOnInit(): void {
    this.userId = window.localStorage.getItem('userId');
    this.getCartProducts()
    console.log('userId');

  }



  getCartProducts() {
    this.http.get('http://127.0.0.1:8000/api/users/carts/2').subscribe(products => {
      this.products = products
      this.products.forEach(product => {
        this.total += product.price * product.pivot.qty
      });
    });
  }


  async minus(product) {
    if (product.pivot.qty > 1) {
      
      await this.http.post(`http://127.0.0.1:8000/api/users/${this.userId}/carts`, {
        product_id: product.id,
        qty: --product.pivot.qty
      }).subscribe(res => {
        this.total-= product.price
        console.log('minus');
      })
    }
  }

  async plus(product) {
    
    await this.http.post(`http://127.0.0.1:8000/api/users/${this.userId}/carts`, {
      product_id: product.id,
      qty: ++product.pivot.qty
    }).subscribe(res => {
      this.total-= product.price
      console.log('plus');
    })
  }
  selectProduct(id) {
    const index = this.selectedProductIds.findIndex(pId => pId == id);
    index > -1 
    ? this.selectedProductIds.splice(index, 1) 
    : this.selectedProductIds.push(id)

    console.log(this.selectedProductIds)
  }

  selectAll() {
    if (this.selectedProductIds.length) {
       this.selectedProductIds = this.products.map(product => product.id)
    }
  }
  

  hideMe = true;
  async checkout() {
    this.hideMe= false;

    await this.http.post(`http://127.0.0.1:8000/api/orders/users/${this.userId}`, {
      total: this.total,
      address: "cxv xc",
      phonenumber: "0989998899",
      product_ids: this.selectedProductIds
    }, httpOptions).subscribe(res => {
      console.log(res);
    // Swal.fire({
    //   text: 'You order successfully! <br> The item will be delivery within 3 days.',
    //   icon: 'success'
    // });
    // 
    
      

    
    });

    window.location.reload();
    

  }

 

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};
