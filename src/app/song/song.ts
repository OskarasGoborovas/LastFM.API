import {Artist} from '../artist/artist';
import {Album} from '../album';

export class Song {
    name : string = '';
    mbid : string= '';
    url : string= '';
    
    artist : Artist = new Artist();
    album : Album = new Album();

}
