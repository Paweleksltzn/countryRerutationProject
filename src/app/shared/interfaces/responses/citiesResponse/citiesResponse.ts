import { Meta } from '@angular/platform-browser';
import { City } from './resultRow';

export interface CitiesResponse {
    meta: Meta;
    results: City[];
}
