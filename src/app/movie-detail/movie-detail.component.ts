import { Component, Input, input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie!: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovie()
  }
  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie)
  }

}
