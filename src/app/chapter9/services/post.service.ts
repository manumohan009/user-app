import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import 'rxjs/add/operator/catch';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http:Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost( post ) {
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response) => {
      if ( error.status === 400 ) {
        return Observable.throw( new BadInput(error.json()));
      } else {

      }
      return Observable.throw( new AppError(error.json()));

    });
  }

  updatePost ( post ) {
     return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost( id ) {
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if( error.status === 404 ) {
            return Observable.throw( new NotFoundError());
        } else {
        }
        return Observable.throw( new AppError(error));

      });

  }
}
