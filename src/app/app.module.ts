import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TracklistComponent } from './tracklist/tracklist.component';

import { HttpModule } from '@angular/http';
import { ArtistComponent } from './artist/artist.component';
import {FormsModule} from '@angular/forms';
import { SongComponent } from './song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    TracklistComponent,
    ArtistComponent,
    SongComponent
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