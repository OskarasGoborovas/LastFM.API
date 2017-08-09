import {Artist} from '../artist/artist';

export class Song {
    name : string = '';
    artist : string = '';
    mbid : string= '';
    url : string= '';

    constructor(obj?: any){
        this.name = obj && obj|| null;
        this.artist = obj && obj.artist|| null;
        this.mbid = obj && obj.mbid || null;
        this.url = obj && obj.url || null;
    }
}
