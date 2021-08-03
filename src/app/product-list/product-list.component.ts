import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TopBarComponent } from '../top-bar/top-bar.component';
// import { FooterComponent } from '../footer/footer.component';

import { Product } from '../product';

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
    description: "This is the nike shoes"


  },
  {
    name: "Lebron Soldier",
    price: 6500,
    description: "This is the nike shoes"

  },
  {
    name: "Lebron Witness IV ",
    price: 5000,
    description: "This is the nike shoes"

  },
  {
    name: "Lebron Witness V-White",
    price: 6000,
    description: "This is the nike shoes"

  },
   {
    name: "Lebron VII Grey",
    price: 10000,
    description: "This is the nike shoes"

  },
  {
    name: "Lebron VII PS",
    price: 7250,
    description: "This is the nike shoes"

  },
  {
    name: "Ultraboost",
    price: 6000,
    description: "This is the nike shoes"

  },
  {
    name: "Nike Shirt",
    price: 500,
    description: "This is the nike shoes"

  }

]





}
