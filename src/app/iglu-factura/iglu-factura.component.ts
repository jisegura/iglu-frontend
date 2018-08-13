import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { IgluConfirmarPedidoDialogComponent } from '../iglu-confirmar-pedido-dialog/iglu-confirmar-pedido-dialog.component';

@Component({
  selector: 'app-iglu-factura',
  templateUrl: './iglu-factura.component.html',
  styleUrls: ['./iglu-factura.component.styl']
})
export class IgluFacturaComponent implements OnInit {

  productos: Producto[] = [];
  pedidos: Pedido[];


  constructor(public dialog: MatDialog, private pedidoDataService : PedidoDataService, private productoDataService : ProductoDataService) { }

  ngOnInit() {
    this.pedidoDataService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
    this.productoDataService.getProductos().subscribe(productos => this.productos = productos);
  }

  private getDescuento(precio: number, descuento: number): number{
    return precio - ((precio * descuento) / 100);
  }

  getTotalCost(): number {
    let suma: number = 0;
    if (this.pedidos.length != 0) {
      this.pedidos.find(pedido => pedido.active).productos.forEach(producto => {
        suma += this.getPriceProducto(producto.id, producto.cant, producto.desc);
      })
    }
    return this.getDescuento(suma, this.pedidos.find(pedido => pedido.active).desc_total);
  }

  getNameProducto(id: number): string{
    return this.productos.find(producto => producto.id == id).name;
  }

  getPriceProducto(id: number, cant: number, desc: number): number{
    return this.getDescuento(this.productos.find(producto => producto.id == id).price * cant, desc);
  }

  cancelarPedido(pedido: Pedido): void{
    this.pedidos.splice(this.pedidos.findIndex(ped => ped.numero == pedido.numero), 1);
    if (this.pedidos.length != 0) {
      this.pedidos[0].active = true;
    }
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(IgluConfirmarPedidoDialogComponent, {
      data: {
        pedido: this.pedidos.find(pedido => pedido.active)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
