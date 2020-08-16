import { MatchDataService } from './../match-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-premier-league-results',
  templateUrl: './premier-league-results.component.html',
  styleUrls: ['./premier-league-results.component.css']
})
export class PremierLeagueResultsComponent implements OnInit {
  title: string;
  match_data:any;


  displayedColumns: string[] = ['Date', 'Teams', 'Score'];
  dataSource: MatTableDataSource<any>;
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private service_match: MatchDataService) { 
    
  }

  ngOnInit(){
    this.getMatchData();
    this.match_data = this.service_match.getData();
    console.log(this.match_data);
  }

  getMatchData(){
    this.service_match.getData().then(res=>{
      this.match_data=res;
      //debugger;
      this.formatDataForTable();
    })
  }

  formatDataForTable(){
    this.title = this.match_data.name;
    let source=[];
    for(let i of this.match_data.rounds){
        for(let j of i.matches){
          source.push({
            date:j.date,
            team1:j.team1,
            team2:j.team2,
            score:j.score.ft[0] +'-' + j.score.ft[1]
          })
        }
    }
    this.dataSource = new MatTableDataSource<any>(source); 
    this.dataSource.paginator = this.paginator;
  }
  
  get Title()
  {
    return this.title;
  }
  
}
