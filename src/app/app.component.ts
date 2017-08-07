import { Component } from '@angular/core';

import { TracklistService } from "./tracklist/tracklist.service";
import { ArtistService } from "./artist/artist.service";
import { SongService} from "./song/song.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TracklistService, ArtistService, SongService]
})
export class AppComponent {

}
