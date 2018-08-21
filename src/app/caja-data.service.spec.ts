import { TestBed, inject } from '@angular/core/testing';

import { CajaDataService } from './caja-data.service';

describe('CajaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CajaDataService]
    });
  });

  it('should be created', inject([CajaDataService], (service: CajaDataService) => {
    expect(service).toBeTruthy();
  }));
});
