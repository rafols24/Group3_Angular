import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

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
  
    },  {
      name: "Nike",
      price: 250,
      description: "This is the nike shoes"
  
    }
  
  ]

  ngOnInit(): void {
  }

}
