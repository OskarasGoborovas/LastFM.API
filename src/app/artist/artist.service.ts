import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {
  constructor(private http: Http) { }

  getAll(artist_mbid: string) {

    console.log ('LINK TRYING TO BE OPENED from artist service, getAll: ' +  'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=' + artist_mbid + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json');
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=' + artist_mbid + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }

  getTopTracks(artist_mbid: string){

    console.log ('LINK TRYING TO BE OPENED from artist service, getTopTracks: ' +  'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=' + artist_mbid + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json');
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=' + artist_mbid + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }

}
