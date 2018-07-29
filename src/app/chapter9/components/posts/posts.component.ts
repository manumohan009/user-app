import { BadInput } from './../../common/bad-input';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../../services/post.service';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  //private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    //private http: Http
    private service: PostService) {

   }

  ngOnInit() {
   // this.http.get(this.url)
   this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
      alert ('An unexpected error occurred');
      console.log(error);
      });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';
    //this.http.post(this.url, JSON.stringify(post))
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          // console.log(response.json());
        },
        (error: AppError) => {
          if ( error instanceof BadInput ) {
            alert ('This post has already been deleted. ');
            // this.form.setErrors(error.originalError);
          } else {
            alert ('An unexpected error occurred');
            console.log(error);
          }

      });
  }

  updatePost(post) {
    //this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    this.service.updatePost( post )
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          alert ('An unexpected error occurred');
          console.log(error);
        });
  }

  deletePost(post) {
    //this.http.delete(this.url + '/' + post.id)
    this.service.deletePost( post.id )
    //this.service.deletePost( 345 )

      .subscribe (
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError ) {
            alert ('This post has already been deleted. ');
          } else {
            alert ('An unexpected error occurred');
          }
          console.log(error);
        });
  }

}
