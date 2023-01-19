import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../models/Post";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"],
})
export class PostItemComponent implements OnInit {
  @Input() post: Post; //@Input  property binding: Allows Us to Pass Data From Parent Component to Child Component
  //to bypass strict type checking error , initilize post in constructor
  @Output() hidePost:EventEmitter<Post> = new EventEmitter; //emit an event upward
  @Output() likePost:EventEmitter<Post> = new EventEmitter;
  constructor() {
    this.post = {
      id: 0,
      title: "",
      body: "",
      votes: 1,
    };
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  upvote(post: Post): void {
    post.votes += 1;
  }
  downvote(post: Post): void {
    post.votes -= 1;
  }

  hide(post:Post): void{
    this.hidePost.emit(post);

  }
  like(post:Post): void{
    this.likePost.emit(post)
  }
}
