import { TestBed, inject } from '@angular/core/testing';

import { ProductoDataService } from './producto-data.service';

describe('ProductoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoDataService]
    });
  });

  it('should be created', inject([ProductoDataService], (service: ProductoDataService) => {
    expect(service).toBeTruthy();
  }));
});
