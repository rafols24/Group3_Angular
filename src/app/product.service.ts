import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
  id: number;
  get():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }

 
   
 
}
