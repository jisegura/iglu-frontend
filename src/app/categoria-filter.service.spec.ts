import { TestBed, inject } from '@angular/core/testing';

import { CategoriaFilterService } from './categoria-filter.service';

describe('CategoriaFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaFilterService]
    });
  });

  it('should be created', inject([CategoriaFilterService], (service: CategoriaFilterService) => {
    expect(service).toBeTruthy();
  }));
});
