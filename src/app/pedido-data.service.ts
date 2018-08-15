import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {

  public pedidos: Pedido[] = [];

  /*pedidos: Pedido[] = [{
    "id": 1,
    "active": true,
    "numero": 1,
    "productos": [{
      "id": 1,
      "cant": 5
    },
    {
      "id": 2,
      "cant": 3
    }]
  },
  {
    "id": 2,
    "active": false,
    "numero": 2,
    "productos": [{
      "id": 1,
      "cant": 3
    },
    {
      "id": 2,
      "cant": 1
    },
    {
      "id": 3,
      "cant": 7
    }]
  }]*/

  public constructor() { }

  public getPedidos(): Observable<Pedido[]>{
    return of(this.pedidos);
  }
}
