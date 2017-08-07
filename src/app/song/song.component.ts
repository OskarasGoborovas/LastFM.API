import { Component, OnInit } from '@angular/core';

import { Song } from '../song/song';

import {SongService} from '../song/song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  public artist_name : string = '';
  public song_name : string = '';

  public song : Song;

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.artist_name = params['artist_name'];
      this.song_name = params['song_name'];
      this.load(this.artist_name, this.song_name);
    });
  }

    load(artistName : string, songName : string){
      this.songService.getAll(artistName, songName).subscribe(
      data => { this.song = data.track; },
      error => console.log(error)
    );
  }

}
