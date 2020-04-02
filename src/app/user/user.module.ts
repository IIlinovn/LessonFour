import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserUpdateComponent } from './user-update/user-update.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [UserAuthComponent, UserUpdateComponent, HeaderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class UserModule { }
