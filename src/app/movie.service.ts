import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movies.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies')
    return of(Movies);
  }

  getMovie(id: number): Observable<Movie> {
    this.loggingService.add("MovieService: get detail by id: " + id);
    const foundMovie = Movies.find(movie => movie.id === id);
    return of(foundMovie!); // Null kontrolü kaldırıldı
  }
  
}
