import { Component, OnInit } from '@angular/core';
import {Track} from '../track';
import {PostService} from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  results : Array<Track>;
  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postService.getAll().subscribe(
      data => { this.results = data.tracks.track; },
      error => console.log(error)
    );
  }
}