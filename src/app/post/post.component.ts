import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: Post[];

  constructor(private postService: PostService) {}

  getPosts(): void{
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }
}