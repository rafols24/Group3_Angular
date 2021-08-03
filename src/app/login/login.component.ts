import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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



url = "http://127.0.0.1:8000/api/user/login";

kindOfUser: any;
usertype:any;

isLoginDisabled = false;

onSubmit(): void {
  this.isLoginDisabled = false;
  this.http.post(this.url, this.userLogin.value).subscribe(userToken => {

    console.log(userToken);
    this.kindOfUser = userToken;

    if (this.kindOfUser.logincredential.usertype === 'customer') {
      this.router.navigate(['/userhomepage']);
    }

    if (this.kindOfUser.logincredential.usertype === 'admin') {
      this.router.navigate(['/admin']);
    }

    window.localStorage.setItem('token', this.kindOfUser.token);

    },
    error => {
      // alert("Invalid Credentials!");
      Swal.fire('Oops...', 'Something went wrong!', 'error')
      this.isLoginDisabled = true;
    });
}

}
