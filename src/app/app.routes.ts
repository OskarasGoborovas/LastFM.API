import { Routes } from '@angular/router';

import { PostComponent} from './post/post.component';
import { ArtistComponent} from './artist/artist.component';

export const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'artist', component: ArtistComponent }
];
