import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../song/song';
import { SongService } from '../song/song.service';
import { Post } from '../post/post';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css']
})
export class SongChildComponent implements OnInit {

  @Input() songToFind: string = '';
  @Input() artistToFind: string = '';

  //button output
  @Output() onClicked = new EventEmitter<boolean>();

  //song result from song service
  public song_info = new Song();

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getAll(this.artistToFind, this.songToFind ).subscribe(
        data => { this.song_info = data.track; },
        error => console.log(error)
    );
  }

  //button press to display text in parent component
  clicked(toDisplay: boolean){
    this.onClicked.emit(toDisplay);
    console.log("BUTTON WAS CLICKED inside song-child component" + toDisplay);
  }


}
