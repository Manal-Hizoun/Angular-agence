import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss',
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];
  deletionMessage: string | null = null; 

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    });
  }

  async deletePost(postId: number) {
    try {
      await this.postsService.deletePost(postId);
      this.postList = this.postList.filter(post => post.id !== postId);
      const now = new Date();
      this.deletionMessage = `Post avec ID ${postId} supprimé à ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

      setTimeout(() => {
        this.deletionMessage = null;
      }, 5000);
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete the post. Please try again.');
    }
  }
}
