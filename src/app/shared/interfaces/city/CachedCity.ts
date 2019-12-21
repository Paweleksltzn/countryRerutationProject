import { City } from '../responses/citiesResponse/resultRow';

export interface CachedCity {
    country: string;
    cities: City[];
}
