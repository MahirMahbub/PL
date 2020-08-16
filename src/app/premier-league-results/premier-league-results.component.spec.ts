import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierLeagueResultsComponent } from './premier-league-results.component';

describe('PremierLeagueResultsComponent', () => {
  let component: PremierLeagueResultsComponent;
  let fixture: ComponentFixture<PremierLeagueResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierLeagueResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierLeagueResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
