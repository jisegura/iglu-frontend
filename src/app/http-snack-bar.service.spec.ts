import { TestBed, inject } from '@angular/core/testing';

import { HttpSnackBarService } from './http-snack-bar.service';

describe('HttpSnackBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSnackBarService]
    });
  });

  it('should be created', inject([HttpSnackBarService], (service: HttpSnackBarService) => {
    expect(service).toBeTruthy();
  }));
});
