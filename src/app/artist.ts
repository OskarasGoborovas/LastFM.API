export class Artist {
  name: string;
  mbid: string;
  url: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.mbid = obj && obj.mbid || null;
    this.url = obj && obj.url || null;
  }
}