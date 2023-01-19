import { Component, OnInit } from "@angular/core"; // all lifecycles are imported here
import { Post } from "../models/Post";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  title = "Posts";
  posts: Post[] = [];

  constructor() {}

  //initialization the component with data
  ngOnInit(): void {
    //template has access to this post data
    this.posts = [
      {
        id: 4,
        title: "Post 1",
        body: "Hi,",
        votes: 1,
      },
      {
        id: 3,
        title: "test 1",
        body: "Hi,",
        votes: 1,
      },
      {
        id: 2,
        title: "Post 1",
        body: "Hi,",
        votes: 1,
      },
    ];
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  like(post: Post): void {
    window.alert(`${post.title} post added to likes`);
  }

  getUserId(): string {
    return "001";
  }
}
