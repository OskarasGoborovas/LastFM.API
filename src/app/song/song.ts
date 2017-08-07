export class Song {
    name : string = '';
    mbid : string= '';
    url : string= '';

    constructor(obj?: any){
        this.name = obj && obj|| null;
        this.mbid = obj && obj.mbid || null;
        this.url = obj && obj.url || null;
    }
}