import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './detail-posts.component.html',
  styleUrl: './detail-posts.component.scss'
})
export class DetailPostsComponent {
   route: ActivatedRoute = inject(ActivatedRoute);
   postsService = inject(PostsService);
   postId = -1;
   postDetail :Post|null = null;

   constructor(){
    this.postId = Number(this.route.snapshot.params['postId']);
    this.postsService.getPostById(this.postId).then((post: Post) => {
      this.postDetail = post;
    });
   }
}
