import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from '../pedido.model';
import { FacturaDataService } from '../factura-data.service';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { HttpSnackBarService } from '../http-snack-bar.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-iglu-confirmar-pedido-dialog',
  templateUrl: './iglu-confirmar-pedido-dialog.component.html',
  styleUrls: ['./iglu-confirmar-pedido-dialog.component.styl']
})
export class IgluConfirmarPedidoDialogComponent implements OnInit {

  public cambio: number;
  public isDisabled: boolean = true;
  public cajaOpen: Caja;
  public cajaOpenObs: Observable<Caja>;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private facturaDataService: FacturaDataService,
    private cajaDataService: CajaDataService,
    private httpSnackBarService: HttpSnackBarService
  ) { }

  public ngOnInit(): void{
    this.cajaOpenObs = this.cajaDataService.cajaOpen;
    this.cajaOpenObs.subscribe(caja => this.cajaOpen = caja);
  }

  public getNumeroPedido(): number{
    return this.data.pedido.numero;
  }

  public metodoDePago(event): void{
    this.data.factura.FormaDePago.Int64 = +event.value;
    if (this.data.factura.Renglones.length !== 0) {
      this.isDisabled = false;
    }
  }

  public sendFactura(): void{
    this.facturaDataService
      .addClienteFactura(this.data.factura)
      .subscribe(producto => {
        this.httpSnackBarService.openSnackBar("Factura Cliente", "OK");
        this.facturaDataService.loadAllLastFacturas(this.cajaOpen.Id_caja);
      }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public showCambio($event): void{
    let pagaCon = $event.target.value;
    if (pagaCon > this.data.factura.Precio) {
      this.cambio = pagaCon - this.data.factura.Precio;
    } else {
      this.cambio = null;
    }
  }

}
