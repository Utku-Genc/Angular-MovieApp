import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movies.datasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return Movies;
  }
}
