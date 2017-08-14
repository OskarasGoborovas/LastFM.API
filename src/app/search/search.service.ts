import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  
  searchTrack(song_name: string){

    var str = song_name;
    var replaced_song_name = str.split(' ').join('+');

    console.log ('LINK TRYING TO BE OPENED from search service' +  'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + replaced_song_name + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json');
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + replaced_song_name + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }


}
