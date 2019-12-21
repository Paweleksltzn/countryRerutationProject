import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearcherComponent } from './country-searcher.component';

describe('CountrySearcherComponent', () => {
  let component: CountrySearcherComponent;
  let fixture: ComponentFixture<CountrySearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
