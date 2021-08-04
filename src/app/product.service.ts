import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private productUrl = "http://127.0.0.1:8000/api/product/deleteProduct"; 

  deleteProduct(id){
    return this.httpClient.delete(this.productUrl+'/'+id);
  }

 
   
 
}
