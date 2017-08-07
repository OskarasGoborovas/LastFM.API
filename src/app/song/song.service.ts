import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService {
  constructor(private http: Http) { }
  getAll(artist_name : string, song_name : string) {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=05db3c83877e76ef1ceda90c8144052f&artist='+artist_name+'&track='+song_name+'format=json')
      .map((res: Response) => res.json());
  }
}