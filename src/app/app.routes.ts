import { Routes } from '@angular/router';

import { TracklistComponent} from './tracklist/tracklist.component';
import { ArtistComponent} from './artist/artist.component';
import { SongComponent } from './song/song.component';

export const routes: Routes = [
  { path: '', component: TracklistComponent },
  { path: 'artist/:mbid', component: ArtistComponent },
  { path: 'song/:artist_name/:song_name', component: SongComponent }
];
