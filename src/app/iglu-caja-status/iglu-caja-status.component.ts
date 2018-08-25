import { Component, OnInit } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { ViewsService, VistaAdmin } from '../views.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { IgluCajaAbrirModalComponent } from '../iglu-caja-abrir-modal/iglu-caja-abrir-modal.component';



@Component({
  selector: 'app-iglu-caja-status',
  templateUrl: './iglu-caja-status.component.html',
  styleUrls: ['./iglu-caja-status.component.styl']
})
export class IgluCajaStatusComponent implements OnInit {

  public cajaOpen: Observable<Caja>;
  public viewAdminActive: VistaAdmin;

  constructor(
    public dialog: MatDialog,
  	private cadaDataService: CajaDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.cajaOpen = this.cadaDataService.cajaOpen;
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

  public openDialog(): void{

    const dialogRef = this.dialog.open(IgluCajaAbrirModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        let caja = {
          Inicio: result
        } as Caja
        this.cadaDataService.create(caja);
      }
    });
  }

}
