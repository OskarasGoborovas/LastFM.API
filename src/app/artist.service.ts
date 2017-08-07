import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {
  constructor(private http: Http) { }
  getAll() {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=f59c5520-5f46-4d2c-b2c4-822eabf53419&api_key=05db3c83877e76ef1ceda90c8144052f&format=json')
      .map((res: Response) => res.json());
  }
}