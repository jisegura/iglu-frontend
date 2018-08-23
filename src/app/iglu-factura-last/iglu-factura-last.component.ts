import { Component, OnInit } from '@angular/core';
import { FacturaDataService } from '../factura-data.service';
import { Factura, FacturaGeneral } from '../factura.model';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';


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
    private facturaDataService: FacturaDataService,
    private cajaDataService: CajaDataService
  ) { }

  ngOnInit() {
    this.lastFacturasObs = this.facturaDataService.lastFacturas;
    this.cajaObs = this.cajaDataService.cajaOpen;
  }

  public isCajaOpen(caja: Caja): boolean{
    if (caja.Id_caja !== undefined) {
      if (this.lastValue !== caja.Id_caja) {
        this.facturaDataService.loadAllLastFacturas(caja.Id_caja);
        this.lastValue = caja.Id_caja;
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

}
