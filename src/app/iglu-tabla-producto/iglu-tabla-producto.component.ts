import { Component, OnInit, Input } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { Producto, TablaProducto } from '../producto.model';
import { Pedido } from '../pedido.model';


@Component({
  selector: 'app-iglu-tabla-producto',
  templateUrl: './iglu-tabla-producto.component.html',
  styleUrls: ['./iglu-tabla-producto.component.styl']
})
export class IgluTablaProductoComponent implements OnInit {

  @Input() fila: number;
  @Input() col: number;
  @Input() pedido: Pedido;
  productos: Producto[];
  tablaProductos: TablaProducto[][];

  constructor(private productoDataService : ProductoDataService) { }

  ngOnInit() {
    this.productoDataService.getProductos().subscribe(productos => this.productos = productos);
    this.crearTabla();
  }

  private crearTabla(): void{
    this.tablaProductos = [];
    for (let f = 0; f < this.fila; ++f) {
      this.tablaProductos[f] = [];
      for (let c  = 0; c < this.col; ++c) {
        let pos = f*this.col + c;
        if (this.pedido.productos.length > pos) {
          this.tablaProductos[f][c] = new TablaProducto;
          this.tablaProductos[f][c].cant = this.pedido.productos[pos].cant;
          this.tablaProductos[f][c].image = this.productos.find(prod => prod.id == this.pedido.productos[pos].id).image;
        }
      }
    }
  }

}
