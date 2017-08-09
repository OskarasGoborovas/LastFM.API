import { Component, OnInit } from '@angular/core';
import { SONGS } from '../songs';

@Component({
  selector: 'app-song-parent',
  templateUrl: './song-parent.component.html',
  styleUrls: ['./song-parent.component.css']
})
export class SongParentComponent implements OnInit {

    songs = SONGS;
    master = 'Master';


  constructor() { }

  ngOnInit() {
  }

}