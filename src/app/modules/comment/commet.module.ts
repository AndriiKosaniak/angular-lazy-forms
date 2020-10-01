import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommetRoutingModule } from './commet-routing.module';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {OneCommentComponent} from './components/one-comment/one-comment.component';


@NgModule({
  declarations: [AllCommentsComponent, OneCommentComponent],
  imports: [
    CommonModule,
    CommetRoutingModule
  ]
})
export class CommetModule { }
