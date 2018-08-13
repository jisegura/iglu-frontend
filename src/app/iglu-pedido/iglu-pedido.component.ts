import { Component, OnInit } from '@angular/core';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-iglu-pedido',
  templateUrl: './iglu-pedido.component.html',
  styleUrls: ['./iglu-pedido.component.styl']
})
export class IgluPedidoComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoDataService : PedidoDataService) { }

  ngOnInit() {
    this.pedidoDataService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
  }

  newPedido(): void{
    if (this.pedidos.length != 0) {
      let pos = 0;
      let index = 1;
      let nuevo_pedido = new Pedido;
      for (let pedido of this.pedidos) {
        if (pedido.numero != index) {
          pos = index;
          break;
        }
        index++;
      }
      if (pos != 0) {
        nuevo_pedido.numero = pos;
      } else {
        nuevo_pedido.numero = this.pedidos.length+1;
      }
      nuevo_pedido.productos = [];
      this.pedidos.push(nuevo_pedido);
      this.pedidos.sort((a, b) => a.numero < b.numero ? -1 : a.numero > b.numero ? 1 : 0);
      this.switchPedido(nuevo_pedido);
    } else {
      let nuevo_pedido = new Pedido;
      nuevo_pedido.numero = 1;
      nuevo_pedido.productos = [];
      nuevo_pedido.active = true;
      this.pedidos.push(nuevo_pedido);
    }
  }

  switchPedido(pedido: Pedido): void{
    if (!pedido.active) {
      this.pedidos.find(pedido => pedido.active).active = false;
      pedido.active = true;
    }
  }

}
