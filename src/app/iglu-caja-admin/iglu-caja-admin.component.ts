import { Component, OnInit, Input } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { ViewsService, VistaAdmin } from '../views.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-caja-admin',
  templateUrl: './iglu-caja-admin.component.html',
  styleUrls: ['./iglu-caja-admin.component.styl']
})
export class IgluCajaAdminComponent implements OnInit {

  public cajaOpen: Observable<Caja>;

  public viewAdminActive: VistaAdmin;

  @Input() public caja: boolean = false;

  constructor(
    private cajaDataService: CajaDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.cajaOpen = this.cajaDataService.cajaOpen;
    this.viewsService
      .getAdminVistaActive()
      .subscribe(viewAdminActive => this.viewAdminActive = viewAdminActive);
  }

  public isCajaOpen(caja: Caja): boolean{
    if (caja.Id_caja !== undefined) {
      return true;
    } else {
      return false;
    }
  }

}
