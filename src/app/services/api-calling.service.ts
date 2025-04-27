import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  //you need to import httpclient to use JSON APIs, private means this httpClient available in this instance only
  constructor(private http:HttpClient) { }

  getJsonPlaceholderPosts(){
    const url="https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url) //now call this method using constructor in app-component
  }

  //uses JSON Typicode local fake json server
  getLocalAPI(){
    const url="http://localhost:3000/users"
    return this.http.get(url) //now call this method using constructor in app-component
  }

  savePost(post:Post):Observable<Post>{ //this is ng implementation of post API
    const url="http://localhost:3000/addPost"
    return this.http.post<Post>(url,{post});
  }

}
