import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../../customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;

  customerUrl = "http://127.0.0.1:8000/api/user/getuser";


//   constructor(
//     private router: Router,
//     private http: HttpClient

  
 

  constructor(
    private router: Router,
    private http: HttpClient,
    private customerservice: CustomerService

  ) { }

  ngOnInit(): void {
    this.http.get(this.customerUrl).subscribe((customerData:any)=>{
      this.customers = customerData.message;
      console.log(customerData);

//     });

    }); 
  }

  
  deleteCustomer(customer){
    this.customerservice.deletePost(customer)
        .subscribe(response => {
          console.log(response);
          window.location.reload();
        });

  }
     



}
