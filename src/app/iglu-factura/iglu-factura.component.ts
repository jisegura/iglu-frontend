import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PedidoDataService } from '../pedido-data.service';
import { Pedido } from '../pedido.model';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { EmpleadoActiveService } from '../empleado-active.service';
import { EmpleadoActivo } from '../empleado.model';
import { Factura, Clientes, Renglon, FacturaGeneral } from '../factura.model';

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
  public cajaOpen: Caja;
  public cajaOpenObs: Observable<Caja>;
  public pedidos: Pedido[];
  public emplActivo: EmpleadoActivo;


  public constructor(
    public dialog: MatDialog,
    private pedidoDataService: PedidoDataService,
    private productoDataService: ProductoDataService,
    private cajaDataService: CajaDataService,
    private empleadoActiveService: EmpleadoActiveService
  ) { }

  public ngOnInit(): void{
    this.pedidoDataService
      .getPedidos()
      .subscribe(pedidos => this.pedidos = pedidos);
    this.prodObs = this.productoDataService.productos;
    this.prodObs.subscribe(prod => this.productos = prod);
    this.cajaOpenObs = this.cajaDataService.cajaOpen;
    this.cajaOpenObs.subscribe(caja => this.cajaOpen = caja);
    this.empleadoActiveService.getEmpleados().subscribe(empl => this.emplActivo = empl);
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
    let prod = this.productos.find(producto => producto.Id_producto == id);
    return prod === undefined ? "" : prod.Nombre;
  }

  public getPriceProducto(id: number, cant: number, desc: number): number{
    let prod = this.productos.find(producto => producto.Id_producto == id);
    return prod === undefined ? 0 : this.getDescuento(prod.Precio * cant, desc);
  }

  public cancelarPedido(pedido: Pedido): void{
    this.pedidos.splice(this.pedidos.findIndex(ped => ped.numero == pedido.numero), 1);
    if (this.pedidos.length != 0) {
      this.pedidos[0].active = true;
    }
  }

  public openDialog(): void{
    let renglon: Renglon[] = [];

    this.pedidos.find(pedido => pedido.active).productos.forEach(producto => {
      let reng: Renglon = new Renglon();
      reng.Id_producto = {
        Int64: producto.id,
        Valid: true
      };
      reng.Cantidad = producto.cant;
      reng.Precio = this.getPriceProducto(producto.id, producto.cant, producto.desc);
      reng.Descuento = +producto.desc;
      renglon.push(reng);
    })

    let cliente = {
      Id_caja: this.cajaOpen.Id_caja,
      Id_empleado: {
        Int64: +this.emplActivo.Id_empleado,
        Valid: true
      },
      Precio: this.getTotalCost(),
      ComentarioBaja: "",
      Descuento: {
        Int64: +this.pedidos.find(pedido => pedido.active).desc_total,
        Valid: true
      },
      FormaDePago: {
        Int64: 0,
        Valid: true
      },
      Renglones: renglon,
      Comentario: {
        String: "",
        Valid: false
      }
    } as FacturaGeneral;

    const dialogRef = this.dialog.open(IgluConfirmarPedidoDialogComponent, {
      data: {
        pedido: this.pedidos.find(pedido => pedido.active),
        factura: cliente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
