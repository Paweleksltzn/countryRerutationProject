import { Component, OnInit } from '@angular/core';
import { allowedCountries } from '../../data/allowedCountries';
import { CountryService } from '../../services/country.service';
import { CitiesResponse } from 'src/app/shared/interfaces/responses/citiesResponse/citiesResponse';
import { CountryCacherService } from '../../services/country-cacher.service';
import { City } from 'src/app/shared/interfaces/responses/citiesResponse/resultRow';
import { citiesErrorMessages } from '../../data/errorMessages';

@Component({
  selector: 'app-country-searcher',
  templateUrl: './country-searcher.component.html',
  styleUrls: ['./country-searcher.component.scss']
})
export class CountrySearcherComponent implements OnInit {
  public countryName = '';
  public loadedCities: City[] = [];
  public errorMessage = '';

  constructor(private countryService: CountryService, private countryCacherService: CountryCacherService) { }

  ngOnInit() {
    this.countryName = localStorage.getItem('countryName');
  }

  public fillCountry() {
    if (this.countryName) {
      allowedCountries.forEach((country: string) => {
        if (country.toLocaleLowerCase().includes(this.countryName.toLocaleLowerCase())) {
          this.countryName = country;
        }
      });
    }
    localStorage.setItem('countryName', this.countryName);
  }

  public changeCountry() {
    if (allowedCountries.includes(this.countryName)) {
      const countryCities = this.countryCacherService.getCitiesForCountry(this.countryName);
      this.errorMessage = '';
      if (!countryCities) {
        this.countryService.getCities(this.countryName).subscribe((cities: CitiesResponse) => {
          this.countryCacherService.saveCitiesForCountry(this.countryName, cities.results);
          this.loadedCities = cities.results;
        }, err => {
          this.loadedCities = [];
          this.errorMessage = citiesErrorMessages.failedDataLoad;
        });
      } else {
        this.loadedCities = countryCities.cities;
      }
    } else {
      this.loadedCities = [];
      this.errorMessage = citiesErrorMessages.invalidValue;
    }
  }

  public loadDescription(city: City) {
    if (!city.description) {
      this.countryService.getCityDescription(city.name, city.country).subscribe(res => {
        // tslint:disable-next-line: forin
        for (const property in res.query.pages) {
          city.description = res.query.pages[property].extract;
        }
      });
    }
  }

}
