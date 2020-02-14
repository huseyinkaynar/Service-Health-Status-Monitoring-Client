import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../postservice-class/post-service';

@Injectable({
  providedIn: 'root'
})
export class PostservicesFormService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/checkservices";
  }

  public savepost(postService: PostService) {
    return this.http.post<PostService[]>(this.url, postService);


  }


}
