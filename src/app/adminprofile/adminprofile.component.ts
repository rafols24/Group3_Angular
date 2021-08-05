import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {


  profile:any;
  adminUrl = "http://127.0.0.1:8000/api/product/user/userById/${userId}"; 

  constructor(private http: HttpClient,) { }

  userId:any;
  ngOnInit(): void {
    this.userId = window.localStorage.getItem('userId');
    this.http.get(this.adminUrl).subscribe((adminProfile:any) => {
      this.profile = adminProfile.message;  

    console.log(this.profile);
    
 });
  }




}
