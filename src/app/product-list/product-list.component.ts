import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  products =[
  {
    name: "Kyrie Low",
    price: 5500,
    description: "This is an amazing Kyrie Edition Nice Shoes 100% durable"


  },
  {
    name: "Lebron Soldier",
    price: 6500,
    description: "This shoes is one of lebrons amazing nike collection better grab it now."

  },
  {
    name: "Lebron Witness IV ",
    price: 5000,
    description: "Amazing Lebron Witness Fourth edition nike shoes, limited only."

  },
  {
    name: "Lebron Witness V",
    price: 6000,
    description: "A more durable and amazing collection of nike Lebron Edition"

  },
   {
    name: "Lebron VII Grey",
    price: 10000,
    description: "This shoes makes it elegant to look due to its grey color"

  },
  {
    name: "Lebron VII PS",
    price: 7250,
    description: "You can't miss out Lebrons famous Nike Shoes seventh edition"

  },
  {
    name: "Ultraboost",
    price: 6000,
    description: "This Ultraboost nike shoes it one of the top trends for athletes "

  },
  {
    name: "Nike Shirt",
    price: 500,
    description: "You should not misseed the limited editionof this nike shirt"
  },]
}
 



