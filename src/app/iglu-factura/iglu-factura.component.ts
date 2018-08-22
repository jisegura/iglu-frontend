import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { IgluConfirmarPedidoDialogComponent } from '../iglu-confirmar-pedido-dialog/iglu-confirmar-pedido-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-factura',
  templateUrl: './iglu-factura.component.html',
  styleUrls: ['./iglu-factura.component.styl']
})
export class IgluFacturaComponent implements OnInit {

  public productos: Producto[] = [];
  public prodObs: Observable<Producto[]>;
  public pedidos: Pedido[];


  public constructor(
    public dialog: MatDialog,
    private pedidoDataService: PedidoDataService,
    private productoDataService: ProductoDataService
  ) { }

  public ngOnInit(): void{
    this.pedidoDataService
      .getPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
    this.prodObs = this.productoDataService.productos;
    this.prodObs.subscribe(prod => this.productos = prod);
  }

  private getDescuento(precio: number, descuento: number): number{
    return precio - ((precio * descuento) / 100);
  }

  public getTotalCost(): number{
    let suma: number = 0;
    if (this.pedidos.length != 0) {
      this.pedidos.find(pedido => pedido.active).productos.forEach(producto => {
        suma += this.getPriceProducto(producto.id, producto.cant, producto.desc);
      })
    }
    return this.getDescuento(suma, this.pedidos.find(pedido => pedido.active).desc_total);
  }

  public getNameProducto(id: number): string{
    return this.productos.find(producto => producto.Id_producto == id).Nombre;
  }

  public getPriceProducto(id: number, cant: number, desc: number): number{
    return this.getDescuento(this.productos.find(producto => producto.Id_producto == id).Precio * cant, desc);
  }

  public cancelarPedido(pedido: Pedido): void{
    this.pedidos.splice(this.pedidos.findIndex(ped => ped.numero == pedido.numero), 1);
    if (this.pedidos.length != 0) {
      this.pedidos[0].active = true;
    }
  }

  public openDialog(): void{
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
