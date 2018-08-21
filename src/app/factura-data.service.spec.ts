import { TestBed, inject } from '@angular/core/testing';

import { FacturaDataService } from './factura-data.service';

describe('FacturaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacturaDataService]
    });
  });

  it('should be created', inject([FacturaDataService], (service: FacturaDataService) => {
    expect(service).toBeTruthy();
  }));
});
