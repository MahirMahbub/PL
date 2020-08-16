import { Injectable } from '@angular/core';
import * as data from '../assets/en.1.json';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  data_match = data;
  constructor() {
   }
   
   getData(){
      let datum: Array<any> = []
      //console.log(this.data_match.rounds);
      for (var i=0; i< this.data_match.rounds.length; i++){
        var ar = this.data_match.rounds[i];
        for (var j=0; j< ar.matches.length; j++)
        {
          datum.push(ar.matches[j])
        }
      }
      return datum;
      //return this.data_match
   }
}


