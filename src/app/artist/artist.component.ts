import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist/artist';

import {ArtistService} from '../artist/artist.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public id = '';

  public artist: Artist;

  constructor(private artistService: ArtistService,
              private activatedRoute: ActivatedRoute) { }

    load(mbid : string){
      this.artistService.getAll(mbid).subscribe(
      data => { this.artist = data.artist; },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['mbid'];
      this.load(this.id);
    });
  }


}