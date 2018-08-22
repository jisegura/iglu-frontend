import { Component, OnInit, Input } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { FacturaDataService } from '../factura-data.service';
import { Clientes, Retiros, Otros, FacturaByIdCaja } from '../factura.model';
import { ViewsService, VistaAdmin } from '../views.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-caja-admin',
  templateUrl: './iglu-caja-admin.component.html',
  styleUrls: ['./iglu-caja-admin.component.styl']
})
export class IgluCajaAdminComponent implements OnInit {

  public cajaOpen: Observable<Caja>;
  public clientes: Clientes[];
  public retiros: Retiros[];
  public otros: Otros[];

  public viewAdminActive: VistaAdmin;

  @Input() public caja: boolean = false;

  constructor(
    private cajaDataService: CajaDataService,
    private facturaDataService: FacturaDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.cajaOpen = this.cajaDataService.cajaOpen;
    this.facturaDataService.getClientesByIdCaja(1).subscribe(cli => this.clientes = cli);
    this.facturaDataService.getRetirosByIdCaja(1).subscribe(ret => this.retiros = ret);
    this.facturaDataService.getOtrosByIdCaja(1).subscribe(otr => this.otros = otr);
    this.viewsService
      .getAdminVistaActive()
      .subscribe(viewAdminActive => this.viewAdminActive = viewAdminActive);
  }

}
