import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { HttpModule } from '@angular/http';
import { TrackDetailComponent } from './track-detail/track-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TrackDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
