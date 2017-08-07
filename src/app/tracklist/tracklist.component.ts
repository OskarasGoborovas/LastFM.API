
import { Component, OnInit } from '@angular/core';
import {Track} from '../tracklist/track';
import {TracklistService} from '../tracklist/tracklist.service';
@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css'],
  providers:[TracklistService]
})
export class TracklistComponent implements OnInit {
  results: Array<Track>;
  constructor(private postService: TracklistService) { }
  ngOnInit() {
    this.postService.getAll().subscribe(
      data => { this.results = data.tracks.track; },
      error => console.log(error)
    );
  }
}