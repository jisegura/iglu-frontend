import { Component, OnInit } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { ViewsService, VistaAdmin } from '../views.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-caja-status',
  templateUrl: './iglu-caja-status.component.html',
  styleUrls: ['./iglu-caja-status.component.styl']
})
export class IgluCajaStatusComponent implements OnInit {

  public cajaOpen: Observable<Caja>;
  public viewAdminActive: VistaAdmin;

  constructor(
  	private cadaDataService: CajaDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.cajaOpen = this.cadaDataService.cajaOpen;
    this.cadaDataService.loadCajaOpen();
    this.viewsService
      .getAdminVistaActive()
      .subscribe(viewAdminActive => this.viewAdminActive = viewAdminActive);
  }

  public haveCajaOpen(caja: Caja): boolean{
    return caja.Id_caja !== 0;
  }

  public showCajaOpen(): void{
    this.viewAdminActive.active = "CAJAOPEN";
  }

}
