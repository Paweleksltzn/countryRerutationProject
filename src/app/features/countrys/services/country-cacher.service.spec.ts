import { TestBed } from '@angular/core/testing';

import { CountryCacherService } from './country-cacher.service';

describe('CountryCacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryCacherService = TestBed.get(CountryCacherService);
    expect(service).toBeTruthy();
  });
});
