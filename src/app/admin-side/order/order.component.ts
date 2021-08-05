import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:any;
  orderProduct = "http://127.0.0.1:8000/api/order";
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.orderProduct).subscribe((data)=>{
    this.orders = data;
    console.log(this.orders);
    });

  }

}
