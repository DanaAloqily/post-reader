import { Injectable } from "@angular/core";
import { Post } from "../models/Post";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPost(): Observable<Post[]> {
    //get request to an API
    return this.http.get<Post[]>(
      "http://jsonplaceholder.typicode.com/posts?_limit=8"
    );
  }
}
