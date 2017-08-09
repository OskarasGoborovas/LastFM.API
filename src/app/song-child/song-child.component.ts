import { Component, OnInit, Input } from '@angular/core';
import { Songs } from '../songs';
import {Song} from '../song/song';
import {SongService} from '../song/song.service';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css']
})
export class SongChildComponent implements OnInit {


  @Input() songsTest: Songs = new Songs();
  @Input() masterName: string;

  public song_info: Song = new Song();

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getAll(this.songsTest.name, this.songsTest.songName ).subscribe(
        data => { this.song_info = data.track; },
        error => console.log(error)
    );

  }

}