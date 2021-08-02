import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient

  ) { }

userLogin: any

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

usertype: any;

url = "http://127.0.0.1:8000/api/user/create";

kindOfUser: any;

isLoginDisabled = false;

onSubmit(): void {
  this.http.post(this.url, this.userLogin.value).subscribe(userToken => {

    this.kindOfUser = userToken;
    console.log(userToken);
  
    });


}

}
