import { Component, OnInit } from '@angular/core';
import {Song} from './song';
import {SongService} from './song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  public artist_name: string = '';
  public song_name: string = '';

  //result from song service
  public song_info: Song;

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    
    this.activatedRoute.params.subscribe(params => {
      this.artist_name = params['artist_name'];
      this.song_name = params['song_name'];

        this.songService.getAll(this.artist_name, this.song_name).subscribe(
        data => { this.song_info = data.track; },
        error => console.log(error)
      );
    });
    
  }

}
