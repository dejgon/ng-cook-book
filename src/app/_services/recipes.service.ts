import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from '../_models/recipe';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class RecipesService {
    private postsUrl = 'http://localhost:8000/recipes/';

    constructor(
        private http: HttpClient,
    ) {}

    getRecipe(id: string): Observable<Recipe[]> {
        const url = `${this.postsUrl}/${id}`;
        return this.http.get<Recipe[]>(url)
            .pipe(
                catchError(this.handleError('getRecipe', []))
            );
    }
    getAllRecipes(): Observable<Recipe[]> {
      const url = `${this.postsUrl}getAll`;
      return this.http.get<Recipe[]>(url)
            .pipe(
                catchError(this.handleError('getAllRecipes', []))
            );
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

}
