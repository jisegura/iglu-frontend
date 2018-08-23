import { Component, OnInit } from '@angular/core';
import { Retiros } from '../factura.model';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { EmpleadoActiveService } from '../empleado-active.service';
import { EmpleadoActivo } from '../empleado.model';
import { FacturaDataService } from '../factura-data.service';
import { HttpSnackBarService } from '../http-snack-bar.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-retidos-modal',
  templateUrl: './iglu-retidos-modal.component.html',
  styleUrls: ['./iglu-retidos-modal.component.styl']
})
export class IgluRetidosModalComponent implements OnInit {

  public isDisabled: boolean = true;
  public retiro: number;
  public cajaOpen: Caja;
  public cajaOpenObs: Observable<Caja>;
  public emplActivo: EmpleadoActivo;

  constructor(
    private cajaDataService: CajaDataService,
    private empleadoActiveService: EmpleadoActiveService,
    private facturaDataService: FacturaDataService,
    private httpSnackBarService: HttpSnackBarService
  ) { }

  ngOnInit() {
    this.cajaOpenObs = this.cajaDataService.cajaOpen;
    this.cajaOpenObs.subscribe(caja => this.cajaOpen = caja);
    this.empleadoActiveService.getEmpleados().subscribe(empl => this.emplActivo = empl);
  }

  public checkValor($event): void{
    if ($event.target.value > 0) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  public sendFactura(): void{
    const ret = {
      Id_caja: this.cajaOpen.Id_caja,
      Id_empleado: +this.emplActivo.Id_empleado,
      Precio: this.retiro,
    } as Retiros;

    this.facturaDataService.addRetirosFactura(ret).subscribe(producto => this.httpSnackBarService.openSnackBar("Factura Retiro", "OK"), error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

}
