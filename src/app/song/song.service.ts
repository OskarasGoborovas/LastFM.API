import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService {
  constructor(private http: Http) { }
  getAll(artist_name: string, song_name: string) {

    //replaces spaces in artist/song names with "+"
    var str1 = artist_name;
    var str2 = song_name;
    var replaced_artist_name = str1.split(' ').join('+');
    var replaced_song_name = str2.split(' ').join('+');

    console.log ('LINK TRYING TO BE OPENED from song service' +  'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&artist=' + replaced_artist_name + '&track=' + replaced_song_name + '&format=json');
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&artist=' + replaced_artist_name + '&track=' + replaced_song_name + '&format=json')
      .map((res: Response) => res.json());
  }
}
