import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  product: any;
  isShown = false;
  productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
  show:boolean;

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
