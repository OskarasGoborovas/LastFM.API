import {Artist} from './artist/artist';

export class Songs {
    name : string = '';
    songName : string = '';
      constructor(obj?: any){
        this.songName = obj && obj|| null;
        this.name = obj && obj|| null;
  }
}
export const SONGS = [
  {name: 'Linkin Park', songName: 'In The End'},
  {name: 'Linkin Park', songName: 'Numb'},
  {name: 'Linkin Park', songName: 'Breaking the Habit'},
  {name: 'Kendrick Lamar', songName: 'HUMBLE.'}
];