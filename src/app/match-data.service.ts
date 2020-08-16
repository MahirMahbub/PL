import { Injectable } from '@angular/core';
import * as data from '../assets/en.1.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatchDataService {
  data_match = data;

  url ='https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get(this.url)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}
