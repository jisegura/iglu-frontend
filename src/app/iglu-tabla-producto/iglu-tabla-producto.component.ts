import { Component, OnInit, Input } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { Producto, TablaProducto } from '../producto.model';
import { Pedido } from '../pedido.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-tabla-producto',
  templateUrl: './iglu-tabla-producto.component.html',
  styleUrls: ['./iglu-tabla-producto.component.styl']
})
export class IgluTablaProductoComponent implements OnInit {

  @Input() public fila: number;
  @Input() public col: number;
  @Input() public pedido: Pedido;
  public productos: Producto[];
  public prodObs: Observable<Producto[]>
  public tablaProductos: TablaProducto[][];

  public constructor(
    private productoDataService: ProductoDataService
  ) { }

  public ngOnInit(): void{
    this.prodObs = this.productoDataService.productos;
    this.prodObs.subscribe(prod => this.productos = prod);
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
          this.tablaProductos[f][c].image = this.productos.find(prod => prod.Id_producto == this.pedido.productos[pos].id).Imagen;
        }
      }
    }
  }

}
