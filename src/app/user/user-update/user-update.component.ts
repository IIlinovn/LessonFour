import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  item = ''

  ngOnInit() {
    this.getProfile()
  }

  user = null

  getProfile() {
    this.userService
      .getMe(localStorage.token)
      .subscribe(
        (res) => {
          console.log(res)
          this.user = res;
        }
      )
  }

  title = 'Мой заголовок'

  updateProfile() {
    this.userService
      .update(this.user)
      .subscribe(
        (res) => {
          console.log(res)
        }
      )
  }


}
