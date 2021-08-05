import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  user: any;

//   constructor(private http: HttpClient) { }

//   private productUrl = "http://127.0.0.1:8000/api/product/getAllProducts"; 
//   id: number;
//   get():Observable<Product[]>{
//     return this.http.get<Product[]>(this.productUrl);


  constructor(private httpClient: HttpClient) { }

  private productUrl = "http://127.0.0.1:8000/api/product/deleteProduct"; 

  deleteProduct(id){
    return this.httpClient.delete(this.productUrl+'/'+id);
  }  
 
}
