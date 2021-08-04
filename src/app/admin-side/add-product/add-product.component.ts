import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  product: any = FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.product = this.formBuilder.group({
      product_name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      product_image: ['', [Validators.required]],
    });
  }

dataOfProduct: any;

url  = "http://127.0.0.1:8000/api/product/create";

onSubmit(){
  this.submitted = true;

  if (this.product.invalid) {
    return;
  }

  console.warn(this.product.value);

  this.http.post(this.url, this.product.value).subscribe(productData =>{
  this.dataOfProduct = productData;

  
  Swal.fire({
    text: 'You added a product Successfully!',
    icon: 'success'
  });

  console.log(productData);
  this.router.navigate(['/addproduct']);
  },
   errors =>{
    Swal.fire('Oops...', 'Something went wrong!', 'error')
    console.log(errors.error.errors);
   }
  );
}


}
