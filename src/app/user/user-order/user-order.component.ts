import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

product:any;
  productUrl = "http://127.0.0.1:8000/api/order'";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.productUrl).subscribe((data:any)=> {
      this.product = data.message;
      console.log(this.product);
    })
  }


// this.http.get(this.productUrl).subscribe((data:any) => {
//   this.product = data.message;  
//   data.show = false;
//   return data;
//   console.log(this.product);
// });
// console.log(productUrl);

}
