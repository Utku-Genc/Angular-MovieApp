import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(): any {
    const movies: Movie[] =  [


    {
        id: 1,
        name: "movie 1",
        description: "1.Filme ait açıklamalar.",
        imageUrl: "1.jpg"
    },

    {
        id: 2,
        name: "movie 2",
        description: "2.Filme ait açıklamalar.",
        imageUrl: "2.jpg"
    },

    {
        id: 3,
        name: "movie 3",
        description: "3.Filme ait açıklamalar.",
        imageUrl: "3.jpg"
    },

    {
        id: 4,
        name: "movie 4",
        description: "4.Filme ait açıklamalar.",
        imageUrl: "4.jpg"
    },

    {
        id: 5,
        name: "movie 5",
        description: "5.Filme ait açıklamalar.",
        imageUrl: "5.jpg"
    },

    {
        id: 6,
        name: "movie 6",
        description: "6.Filme ait açıklamalar.",
        imageUrl: "6.jpg"
    },

    {
        id: 7,
        name: "movie 7",
        description: "7.Filme ait açıklamalar.",
        imageUrl: "7.jpg"
    },

    {
        id: 8,
        name: "movie 8",
        description: "8.Filme ait açıklamalar.",
        imageUrl: "8.jpg"
    },

    {
        id: 9,
        name: "movie 9",
        description: "9.Filme ait açıklamalar.",
        imageUrl: "9.jpg"
    },
  ];
  return {movies};
  }
  constructor() { }
}
