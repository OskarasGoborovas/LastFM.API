import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import { Track } from '../track';

import {ArtistService} from '../artist.service';
import {ActivatedRoute} from '@angular/router';

import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public id;

  results: Artist;

  constructor(private artistService: ArtistService,
              private activatedRoute: ActivatedRoute,
              private postComponent: PostComponent) { }
  ngOnInit() {

    /*
    this.activatedRoute.params.subscribe(params => {
      this.id = params['SALES_OPPORTUNITY_ID'];
    });
    */

    this.artistService.getAll().subscribe(
      data => { this.results = data.artist; },
      error => console.log(error)
    );
  }

}