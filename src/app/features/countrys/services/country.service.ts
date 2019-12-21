import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allowedCountriesShourtcuts } from '../data/allowedCountries';
import { CountryObject } from 'src/app/shared/interfaces/entityData/countryObject';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private citiesLimit = 10;

  constructor(private http: HttpClient) { }

  public getCities(country: string): Observable<any> {

    const queryParams = {
      params: {
        country: this. mapCountryNameToShortcut(country),
        limit: this.citiesLimit.toString(),
        order_by: 'count',
        sort: 'desc'
      }
    };

    return this.http.get(`${environment.cities}`, queryParams);
  }

  private mapCountryNameToShortcut(countryName: string) {
    let countryShortName;
    allowedCountriesShourtcuts.forEach((countryNameObject: CountryObject) => {
      if (countryNameObject.name === countryName) {
        countryShortName = countryNameObject.shortName;
      }
    });
    return countryShortName;
  }

}
