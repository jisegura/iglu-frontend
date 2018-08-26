import { Component, OnInit } from '@angular/core';
import { FacturaDataService } from '../factura-data.service';
import { Factura, FacturaGeneral } from '../factura.model';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { MatDialog } from '@angular/material';
import { IgluLastFacturaModalComponent } from '../iglu-last-factura-modal/iglu-last-factura-modal.component';


import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-factura-last',
  templateUrl: './iglu-factura-last.component.html',
  styleUrls: ['./iglu-factura-last.component.styl']
})
export class IgluFacturaLastComponent implements OnInit {

  public lastFacturasObs: Observable<Factura[]>;
  public lastFacturas: Factura[];
  public cajaObs: Observable<Caja>;
  public caja: Caja;
  public lastValue: number = 0;

  constructor(
    public dialog: MatDialog,
    private facturaDataService: FacturaDataService,
    private cajaDataService: CajaDataService
  ) { }

  ngOnInit() {
    this.lastFacturasObs = this.facturaDataService.lastFacturas;
    this.cajaObs = this.cajaDataService.cajaOpen;
    this.cajaObs.subscribe(caja => this.caja = caja);
  }

  public isCajaOpen(caja: Caja): boolean{
    if (caja.Id_caja !== undefined) {
      if (caja.Id_caja !== 0) {
        if (this.lastValue !== caja.Id_caja) {
          this.facturaDataService.loadAllLastFacturas(caja.Id_caja);
          this.lastValue = caja.Id_caja;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  public alreadyBaja(factura: Factura): boolean{
    return (factura.ComentarioBaja === "") ? true : false;
  }

  public isFactClientes(factura: FacturaGeneral): boolean{
    return factura.FormaDePago.Valid && factura.Descuento.Valid && !factura.Comentario.Valid;
  }

  public isFactRetiros(factura: FacturaGeneral): boolean{
    return !factura.FormaDePago.Valid && !factura.Descuento.Valid && !factura.Comentario.Valid;
  }

  public isFactOtros(factura: FacturaGeneral): boolean{
    return !factura.FormaDePago.Valid && !factura.Descuento.Valid && factura.Comentario.Valid;
  }

  public openDialog(factura: Factura): void{
    let facTipo: number;

    if (this.isFactClientes(factura)) {
      facTipo = 1;
    } else if (this.isFactRetiros(factura)) {
      facTipo = 2;
    } else if (this.isFactOtros(factura)) {
      facTipo = 3;
    }

    const dialogRef = this.dialog.open(IgluLastFacturaModalComponent, {
      data: {
        tipo: facTipo,
        valid: true,
        fact: factura,
        cajaId: this.caja.Id_caja
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
