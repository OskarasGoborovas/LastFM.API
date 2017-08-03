import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) {  }
   getAll() {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05db3c83877e76ef1ceda90c8144052f&format=json')
    .map((res: Response) => res.json());

}
}