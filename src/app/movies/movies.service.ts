import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }
  getMovies(){
    console.log ('LINK TRYING TO BE OPENED from song service' +  'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Movies/30.json?api-key=4e78041df036484db89f1d24d3e49fdb');
    return this.http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Movies/30.json?api-key=4e78041df036484db89f1d24d3e49fdb')
      .map((res: Response) => res.json());
  }

}
