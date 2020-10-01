import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../service/posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
    posts: Post[];
    userId: string;

    constructor(private postsService: PostsService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route.params.subscribe(params => {
            const state = this.router.getCurrentNavigation().extras.state;
            if (state) {
                this.userId = state.id;
            } else {
                this.userId = params.id;
            }


            this.postsService.getUserPosts(this.userId).subscribe(posts => {
                this.posts = posts;
            });
        });
    }

    ngOnInit(): void {
        console.log(this.userId);
    }

    navigateFromPosts(url): void {
        this.router.navigate([url]);
    }
}
