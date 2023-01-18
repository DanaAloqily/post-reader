import { Component, OnInit } from "@angular/core";
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

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: "Post 1",
        body: "Hi,",
        votes: 1,
      },
      {
        id: 1,
        title: "Post 1",
        body: "Hi,",
        votes: 1,
      },
      {
        id: 1,
        title: "Post 1",
        body: "Hi,",
        votes: 1,
      },
    ];
  }

  getUserId(): string {
    return "001";
  }
}
