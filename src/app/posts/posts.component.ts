import { Component, OnInit } from "@angular/core"; // all lifecycles are imported here
import { Post } from "../models/Post";
import { PostService } from "../services/post.service";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  title = "Posts";
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  //initialization the component with data
  ngOnInit(): void {
    //should only be concerened with rendering data, not storing
    //template has access to this post data
    this.postService.getPost().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        const post = res[i];
        post["votes"] = 1;
      }
      this.posts = res;
    }); //service
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  like(post: Post): void {
    window.alert(`${post.title} post added to likes`);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
    alert(`post ${post.title} added`);
  }

  getUserId(): string {
    return "001";
  }
}
