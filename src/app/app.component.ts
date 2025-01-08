import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ListPostsComponent, ListTodoComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Agence';
}
