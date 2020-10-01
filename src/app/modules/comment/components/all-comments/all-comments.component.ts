import {Component, OnInit} from '@angular/core';

import {CommentsService} from '../../service/comments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IComment} from '../../models/comment';


@Component({
    selector: 'app-all-comments',
    templateUrl: './all-comments.component.html',
    styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
    comments: IComment[];
    userId: string;

    constructor(public commentsService: CommentsService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => {
            const state = this.router.getCurrentNavigation().extras.state;
            this.userId = state.userId;

            this.commentsService.getPostComments(state.postId).subscribe(comments => this.comments = comments);
        });
    }

    ngOnInit(): void {
    }
    navigateFromComments(url): void {
        this.router.navigate([url]);
    }
}
