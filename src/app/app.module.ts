import { MatchDataService } from './match-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierLeagueResultsComponent } from './premier-league-results/premier-league-results.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierLeagueResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MatchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
