import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {AllPostsComponent} from './components/all-posts/all-posts.component';


@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
  ]
})
export class PostModule { }
