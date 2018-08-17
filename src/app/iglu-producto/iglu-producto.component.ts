import { Component, OnInit } from '@angular/core';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-iglu-producto',
  templateUrl: './iglu-producto.component.html',
  styleUrls: ['./iglu-producto.component.styl']
})
export class IgluProductoComponent implements OnInit {

  public productos: Producto[];
  public pedidos: Pedido[];

  public constructor(
    private pedidoDataService: PedidoDataService,
    private productoDataService: ProductoDataService
  ) { }

  public ngOnInit(): void{
    this.pedidoDataService
      .getPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
    this.productoDataService
      .getProductos()
      .subscribe(productos => this.productos = productos);
  }

  public getCantidad(producto: Producto): number{
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.id_producto);
      return (cantidad != undefined) ? cantidad.cant : 0;
    } else {
      return 0;
    }
  }

  public isVisible(producto: Producto): boolean{
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.id_producto);
      return (cantidad != undefined) ? false : true;
    } else {
      return true;
    }
  }

  public addProducto(producto: Producto): void{
    this.productoDataService.getProducto();
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.id_producto);
      if (this.pedidos
            .find(pedido => pedido.active).productos
            .find(prod => prod.id == producto.id_producto) != undefined) {
        this.pedidos
          .find(pedido => pedido.active).productos
          .find(prod => prod.id == producto.id_producto).cant++
      } else {
        this.pedidos
          .find(pedido => pedido.active).productos
          .push({"id": producto.id_producto, "cant": 1, "desc": 0});
      }
    }
  }

}
