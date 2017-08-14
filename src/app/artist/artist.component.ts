import { Component, OnInit } from '@angular/core';
import { Artist } from './artist';
import { ArtistService } from './artist.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../song/song';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public id;

  public artist_info: Artist;
  public topSongs = new Array<Song>();

  //boolean from button to show/hide text
  public showText: boolean = false;

  constructor(private artistService: ArtistService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['artist_mbid'];
        this.artistService.getAll(this.id).subscribe(
        data => { this.artist_info = data.artist; },
        error => console.log(error)
      );
    });
    
    this.artistService.getTopTracks(this.id).subscribe(
      //gets top songs from artist and only takes top 5 results
        data => { this.topSongs = data.toptracks.track.slice(0,5);  },
        error => console.log(error)
    );
  }

  //button press to show/hide text
  onClicked(toDisplay: boolean) {
    //if toDisplay is true, sets this.showText to true, otherwise to false
    toDisplay ? this.showText = true : this.showText = false;
    console.log('artist component event triggered');
  }

}
