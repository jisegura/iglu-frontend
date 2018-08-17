import { TestBed, inject } from '@angular/core/testing';

import { CategoriaDataService } from './categoria-data.service';

describe('CategoriaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaDataService]
    });
  });

  it('should be created', inject([CategoriaDataService], (service: CategoriaDataService) => {
    expect(service).toBeTruthy();
  }));
});
