import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesArticles = new Array<Movie>();

  constructor(private moviesService: MoviesService){

  }

  ngOnInit() {
      this.moviesService.getMovies().subscribe(
      data => { this.moviesArticles = data.results; },
      error => console.log(error)
    );
  }

}
