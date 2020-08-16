import { MatchDataService } from './../match-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-league-results',
  templateUrl: './premier-league-results.component.html',
  styleUrls: ['./premier-league-results.component.css']
})
export class PremierLeagueResultsComponent implements OnInit {
  title: string;
  match_data;
  constructor(service_match: MatchDataService) { 
    this.title = "Premier League 15/16";
    this.match_data = service_match.getData();
    console.log(this.match_data);
  }

  ngOnInit(): void {
  }
  
  get Title()
  {
    return this.title;
  }
  
  get match_Data()
  {
    //console.log(this.match_data);
    return this.match_data
  }

}
