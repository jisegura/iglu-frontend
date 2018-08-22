import { TestBed, inject } from '@angular/core/testing';

import { EmpleadoActiveService } from './empleado-active.service';

describe('EmpleadoActiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoActiveService]
    });
  });

  it('should be created', inject([EmpleadoActiveService], (service: EmpleadoActiveService) => {
    expect(service).toBeTruthy();
  }));
});
