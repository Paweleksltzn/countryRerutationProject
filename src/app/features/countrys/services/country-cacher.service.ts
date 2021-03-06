import { Injectable } from '@angular/core';
import { City } from 'src/app/shared/interfaces/responses/citiesResponse/resultRow';
import { CachedCity } from 'src/app/shared/interfaces/city/CachedCity';

@Injectable({
  providedIn: 'root'
})
export class CountryCacherService {
  private fetchedCities: CachedCity[] = [];

  constructor() { }

  public getCitiesForCountry(country) {
    return this.fetchedCities.find(city => city.country === country);
  }

  public saveCitiesForCountry(country: string, cities: City[]) {
    if (!this.fetchedCities.find(city => city.country === country)) {
      this.fetchedCities.push({
        country,
        cities
      });
    }
  }

  public saveDescriptionForCity(city: City) {
    this.fetchedCities.forEach(fetchedCity => {
      const correctCity = fetchedCity.cities.find(fetchedSingleCity => city.name === fetchedSingleCity.name);
      if (correctCity) {
        correctCity.description = city.description;
      }
    });
  }

}
