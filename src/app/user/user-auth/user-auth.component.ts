import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  email = 'email@sample111'
  password = '1111'

  ngOnInit() {
  }

  auth() {
    this.userService
      .auth(this.email, this.password)
      .subscribe((res) => {
        console.log(res)
      })
  }

}
