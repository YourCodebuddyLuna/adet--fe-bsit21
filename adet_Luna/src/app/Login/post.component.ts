import { Component } from '@angular/core';


@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {


    posts = [
        { title: 'Latest Updates', description: 'This is the first community post.' },
        { title: 'Angular Tips', description: 'Learn how to build components properly.' },
        { title: 'Announcements', description: 'New features coming soon!' }
    ];


    deletePost(index: number) {
        this.posts.splice(index, 1);
    }
}
