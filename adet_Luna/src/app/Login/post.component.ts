import { Component } from '@angular/core';

interface Post {
  title: string;
  description: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  headerTitle = 'Community Feed';

  posts: Post[] = [
    {
      title: 'Post Title',
      description: 'This is a short description of the post content.'
    },
    {
      title: 'Post Title',
      description: 'Another example description for a post.'
    },
    {
      title: 'Post Title',
      description: 'More content shown inside the post card.'
    }
  ];

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
