import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { SearchService } from '../search/search.service';
import { Article } from '../article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  topChartResults = new Array<Post>();
  searchSongResults = new Array<Post>();

  searchArticleResults = new Array<Article>();

  displayTop: boolean = true;
  searchSong: string = '';

  constructor(private postService: PostService, 
              private searchService: SearchService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(
      data => { this.topChartResults = data.tracks.track; },
      error => console.log(error)
    );
  }

  onClicked(search: string, typeOfSearch: string) {

    if(typeOfSearch == "music"){
    this.searchArticleResults = null;
    this.searchService.searchTrack(search).subscribe(
      data => { this.searchSongResults = data.results.trackmatches.track; },
      error => console.log(error)
    )

    //disables top chart results if searched for song
    this.displayTop = false;
    }
    else if(typeOfSearch == "article"){
      this.searchSongResults = null;
      this.searchService.searchArticles(search).subscribe(
        data => { this.searchArticleResults = data.response.docs; },
      error => console.log(error)
      )
    //disables top chart results if searched for song
    this.displayTop = false;
    }
  }


}
