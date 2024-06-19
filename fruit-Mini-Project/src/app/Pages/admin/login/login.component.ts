import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor(private router: Router) {}

  onLogin() {
    if (
      this.loginObj.userName == 'admin@gmail.com' &&
      this.loginObj.password == '123456'
    ) {
      this.router.navigateByUrl('/products');
      console.log(this.loginObj.userName);
      console.log(this.loginObj.password);
    } else {
      alert('Wrong Credentials');
      console.log(this.loginObj.userName);
      console.log(this.loginObj.password);
    }
  }

  ngOnInit(): void {}
}
