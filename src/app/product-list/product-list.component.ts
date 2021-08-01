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
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"


  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
   {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  },
  {
    name: "Nike",
    price: 250,
    description: "This is the nike shoes"

  }

]





}
