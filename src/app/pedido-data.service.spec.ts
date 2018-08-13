import { TestBed, inject } from '@angular/core/testing';

import { PedidoDataService } from './pedido-data.service';

describe('PedidoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoDataService]
    });
  });

  it('should be created', inject([PedidoDataService], (service: PedidoDataService) => {
    expect(service).toBeTruthy();
  }));
});
