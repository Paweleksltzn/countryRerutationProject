import { Component, OnInit } from '@angular/core';
import { allowedCountries } from '../../data/allowedCountries';

@Component({
  selector: 'app-country-searcher',
  templateUrl: './country-searcher.component.html',
  styleUrls: ['./country-searcher.component.scss']
})
export class CountrySearcherComponent implements OnInit {
  public countryName = '';

  constructor() { }

  ngOnInit() {
  }

  public fillCountry() {
    allowedCountries.forEach((country: string) => {
      if (country.toLocaleLowerCase().search(this.countryName.toLocaleLowerCase()) >= 0) {
        this.countryName = country;
      }
    });
  }

}
