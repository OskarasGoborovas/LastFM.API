export class Track {
    name : string;
    mbid : string;
    url : string;
    duration : number;
    listeners : number;
    playcount : number;

    constructor(obj?: any){
        this.name = obj && obj|| null;
        this.mbid = obj && obj.mbid || null;
        this.url = obj && obj.url || null;
        this.duration = obj && obj.duration || null;
        this.listeners = obj && obj.listeners || null;
        this.playcount = obj && obj.playcount || null;
    }
}
