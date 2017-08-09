export class Album {
        artist : string = '';
        title : string = '';
        mbid : string = '';
        url : string = '';

      constructor(obj?: any){
        this.artist = obj && obj.artist|| null;
        this.title = obj && obj.title|| null;
        this.mbid = obj && obj.mbid|| null;
        this.url = obj && obj.url|| null;
  }
}
