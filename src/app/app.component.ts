import { Component } from '@angular/core';
import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { ArtistService} from './artist/artist.service';
import { ArtistComponent} from './artist/artist.component';
import { SongService } from './song/song.service';
import { SongComponent } from './song/song.component'
import { SearchService} from './search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, ArtistService, SongService, SearchService]
})
export class AppComponent {
  title = 'LAST FM API';
}
