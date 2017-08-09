import {Artist} from '../artist/artist';
import {Album} from '../album';

export class Song {
    name : string = '';
    mbid : string= '';
    url : string= '';
    
    artist : Artist = null;
    album : Album = null;

    constructor(obj?: any){
        this.name = obj && obj|| null;
        this.mbid = obj && obj.mbid || null;
        this.url = obj && obj.url || null;

        this.artist = new Artist();
        this.album = new Album();
    }
}
