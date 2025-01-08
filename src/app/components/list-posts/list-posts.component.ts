import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];
  constructor(){
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    })

    //this.postList = this.postService.getPosts();
  }
    // Nouvelle méthode pour supprimer un post
    async deletePost(postId: number) {
      try {
        await this.postsService.deletePost(postId); // Appel au service pour supprimer le post
        this.postList = this.postList.filter(post => post.id !== postId); // Mise à jour locale
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete the post. Please try again.');
      }
    }
}