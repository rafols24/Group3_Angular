import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  product: any;

  productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 


  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.productUrl).subscribe((data:any) => {

        this.product = data.message;  
    
        console.log(data);
     });
  }

 


}
