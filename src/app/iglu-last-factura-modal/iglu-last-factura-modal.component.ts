import { Component, OnInit, Inject, Input } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { FacturaDataService } from '../factura-data.service';
import { HttpSnackBarService } from '../http-snack-bar.service';
import { Factura, Renglon } from '../factura.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-iglu-last-factura-modal',
  templateUrl: './iglu-last-factura-modal.component.html',
  styleUrls: ['./iglu-last-factura-modal.component.styl']
})
export class IgluLastFacturaModalComponent implements OnInit {

  public productos: Producto[];
  public productosObs: Observable<Producto[]>;
  public coment: string;
  public isDisabled: boolean = true;
  public displayedColumns: string[] = ['name', 'cant', 'desc', 'precio'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productoDataService: ProductoDataService,
    private facturaDataService: FacturaDataService,
    private httpSnackBarService: HttpSnackBarService
  ) { }

  ngOnInit() {
    this.productosObs = this.productoDataService.productos;
    this.productosObs.subscribe(prods => {
      this.productos = prods;
    });
  }

  public checkArea($event): void{
    if ($event.target.value !== "") {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  public getProductoName(prod: Renglon): string{
    let producto: Producto = this.productos.find(item => prod.Id_producto.Int64 === item.Id_producto);
    return producto !== undefined ? producto.Nombre : "";
  }

  public getFormaDePago(tipo: number): string{
    if (tipo === 1) {
      return "Efectivo";
    } else if (tipo === 2) {
      return "Debito";
    } else {
      return "Credito";
    }
  }

  public haveRenglones(): boolean{
    console.log("reng", this.data.fact.Renglones.length);
    return this.data.fact.Renglones.length !== 0;
  }

  public haveComentBaja(comentario: string): boolean{
    return comentario === "" ? false : true;
  }

  public getTitulo(): string{
    if (this.data.tipo === 1) {
      return "Venta";
    } else if (this.data.tipo === 2) {
      return "Retiro";
    } else {
      return "Gasto";
    }
  }

  public darDeBaja(): void{
    let factura = {
      Id_factura: this.data.fact.Id_factura,
      ComentarioBaja: this.coment
    } as Factura;

    console.log(factura);

    this.facturaDataService.updateFactura(factura)
      .subscribe(fact => {
        this.facturaDataService.loadAllLastFacturas(this.data.cajaId);
      }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

}
