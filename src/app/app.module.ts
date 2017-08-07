import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { HttpModule } from '@angular/http';
import { ArtistComponent } from './artist/artist.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ArtistComponent
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