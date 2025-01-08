import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts = async () :Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }

  getPostById = async (postId: Number) :Promise<Post> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+postId);
    return (await response.json()) ?? [];
  }
  deletePost = async (postId: number): Promise<void> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  };
  
}

