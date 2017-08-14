import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  topChartResults = new Array<Post>();
  searchResults = new Array<Post>();

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

  onClicked(toSearch: string) {
    this.searchService.searchTrack(toSearch).subscribe(
      data => { this.searchResults = data.results.trackmatches.track; },
      error => console.log(error)
    )

    //disables top chart results if searched for song
    this.displayTop = false;
    console.log('post component search event triggered with string: ' + toSearch + '. also searchSong is: ' + this.searchSong);
  }


}
