import { Component, OnInit } from '@angular/core';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';
import { ProductoDataService } from '../producto-data.service';
import { Producto, Categoria } from '../producto.model';
import { CategoriaDataService } from '../categoria-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-producto',
  templateUrl: './iglu-producto.component.html',
  styleUrls: ['./iglu-producto.component.styl']
})
export class IgluProductoComponent implements OnInit {

  public productos: Producto[];
  //public productos: Observable<Producto[]>;
  public pedidos: Pedido[];
  public categorias: Categoria[];
  //public categorias: Observable<Categoria[]>;

  public constructor(
    private pedidoDataService: PedidoDataService,
    private productoDataService: ProductoDataService,
    private categoriaDataService: CategoriaDataService
  ) { }

  public ngOnInit(): void{
    this.pedidoDataService
      .getPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
    this.productoDataService
      .getProductos()
      .subscribe(productos => this.productos = productos);
    //this.productos = this.productoDataService.productos;
    //this.productoDataService.loadAll();
    this.categoriaDataService
      .getCatoMock()
      .subscribe(categorias => this.categorias = categorias);
    //this.categorias = this.categoriaDataService.categorias;
    //this.categoriaDataService.loadAll();
  }

  public getCantidad(producto: Producto): number{
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.Id_producto);
      return (cantidad != undefined) ? cantidad.cant : 0;
    } else {
      return 0;
    }
  }

  public isVisible(producto: Producto): boolean{
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.Id_producto);
      return (cantidad != undefined) ? false : true;
    } else {
      return true;
    }
  }

  public btnIsVisible(producto: Producto): boolean{
    return true;
  }

  public addProducto(producto: Producto): void{
    if (this.pedidos.length != 0) {
      let cantidad = this.pedidos
                      .find(pedido => pedido.active).productos
                      .find(prod => prod.id == producto.Id_producto);
      if (this.pedidos
            .find(pedido => pedido.active).productos
            .find(prod => prod.id == producto.Id_producto) != undefined) {
        this.pedidos
          .find(pedido => pedido.active).productos
          .find(prod => prod.id == producto.Id_producto).cant++
      } else {
        this.pedidos
          .find(pedido => pedido.active).productos
          .push({"id": producto.Id_producto, "cant": 1, "desc": 0});
      }
    }
  }

}
