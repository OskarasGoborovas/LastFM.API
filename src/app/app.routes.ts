import { Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component';

export const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'artist/:artist_mbid', component: ArtistComponent },
  { path: 'song/:artist_name/:song_name', component: SongComponent}
];


