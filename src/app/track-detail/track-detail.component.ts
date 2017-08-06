import { Component, OnInit } from '@angular/core';
import {Track} from '../track';

@Component({
  selector: 'app-track-detail',
  // templateUrl: './track-detail.component.html',
  // styleUrls: ['./track-detail.component.css']
  template: `
    <div *ngIf="track">
      <h2>{{track.name}} details!</h2>
      <div><label>id: </label>{{track.id}}</div>
    </div>
  `
})
export class TrackDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
