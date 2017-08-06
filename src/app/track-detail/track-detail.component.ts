import { Component, Input } from '@angular/core';
import {Track} from '../track';

@Component({
  selector: 'app-track-detail',
    template: `
    <div *ngIf="track">
      <h2>{{track.name}} details!</h2>
    </div>
  `
})
export class TrackDetailComponent {

  @Input() track: Track;


}
