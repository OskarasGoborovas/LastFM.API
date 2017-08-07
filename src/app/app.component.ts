import { Component } from '@angular/core';
import { PostService } from "./post.service";
import { ArtistService } from "./artist.service";

import { PostComponent } from "./post/post.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, ArtistService]
})
export class AppComponent {

}
