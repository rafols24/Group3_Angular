import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private customer = 'http://127.0.0.1:8000/api/user/userDelete';

  constructor(private httpClient: HttpClient) { }

  deletePost(id){
    return this.httpClient.delete(this.customer+'/'+id);
  }
}
