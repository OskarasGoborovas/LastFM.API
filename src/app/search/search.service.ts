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

  searchArticles(article_keywords : string){
    var str = article_keywords;
    var replaced_article_keywords = str.split(' ').join('+');

    console.log ('LINK TRYING TO BE OPENED from song service' +  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4e78041df036484db89f1d24d3e49fdb&q='+replaced_article_keywords);
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4e78041df036484db89f1d24d3e49fdb&q='+replaced_article_keywords)
      .map((res: Response) => res.json());
  }
}
