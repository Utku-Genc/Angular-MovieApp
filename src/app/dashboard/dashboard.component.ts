import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  movies: Movie[] = [];
  movieLenght!: number;

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies()
  }

  getMovies():void{
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.slice(0,5);
      this.movieLenght = movies.length;
    })
  }
}
