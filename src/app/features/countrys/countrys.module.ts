import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrySearcherComponent } from './components/country-searcher/country-searcher.component';
import { CountrysRoutingModule } from './countrys-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountrySearcherComponent],
  imports: [
    CommonModule,
    CountrysRoutingModule,
    FormsModule
  ]
})
export class CountrysModule { }
