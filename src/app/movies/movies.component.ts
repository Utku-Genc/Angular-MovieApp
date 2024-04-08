import { Component } from "@angular/core";
import { Movies } from "../movies.datasource";

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrl:  'movies.component.css'
})

export class MoviesComponent{

    title = "Movie List"
    movies= Movies;
}