import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../_models/post';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class PostService {
    private postsUrl = 'http://localhost:8000/posts/getAll';

    constructor(
        private http: HttpClient,
    ) {}

    getPosts (): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl)
            .pipe(
                catchError(this.handleError('getPosts', []))
            );
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

}
