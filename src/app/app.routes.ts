import { Routes } from '@angular/router';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';

export const routes: Routes = [
{
    path: '',
    component: HomepageComponent,
    title: 'Home page'
},{
    path: 'posts',
    component: ListPostsComponent,
    title: 'List post page'
},{
    path: 'posts/new',
    component: NewPostsComponent,
    title: 'New post page'
},{
    path: 'todos',
    component: ListTodoComponent,
    title: 'List todos page'
},{
    path: 'posts/:postId/detail',
    component: DetailPostsComponent,
    title: 'Details post page'
},{
    path: 'todos/:postId/detail',
    component: DetailPostsComponent,
    title: 'Details todo page'
}];
