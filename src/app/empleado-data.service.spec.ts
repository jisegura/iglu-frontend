import { TestBed, inject } from '@angular/core/testing';

import { EmpleadoDataService } from './empleado-data.service';

describe('EmpleadoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoDataService]
    });
  });

  it('should be created', inject([EmpleadoDataService], (service: EmpleadoDataService) => {
    expect(service).toBeTruthy();
  }));
});
