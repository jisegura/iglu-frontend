import { Injectable } from '@angular/core';
import { Pedido } from './pedido.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {

  public pedidos: Pedido[] = [];

  public constructor() { }

  public getPedidos(): Observable<Pedido[]>{
    return of(this.pedidos);
  }
}
