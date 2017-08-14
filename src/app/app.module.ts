import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './post/post.component';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component';
import { SongChildComponent } from './song-child/song-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ArtistComponent,
    SongComponent,
    SongChildComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
