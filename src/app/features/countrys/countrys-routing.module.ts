import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CountrySearcherComponent } from './components/country-searcher/country-searcher.component';

const routes: Routes = [
    {
        path: 'searcher',
        component: CountrySearcherComponent
    }
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class CountrysRoutingModule { }
