import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {OneUserComponent} from './components/one-user/one-user.component';


@NgModule({
  declarations: [AllUsersComponent, OneUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
