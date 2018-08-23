import { Component, OnInit } from '@angular/core';
import { Otros } from '../factura.model';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { EmpleadoActiveService } from '../empleado-active.service';
import { EmpleadoActivo } from '../empleado.model';
import { FacturaDataService } from '../factura-data.service';
import { HttpSnackBarService } from '../http-snack-bar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-otros-modal',
  templateUrl: './iglu-otros-modal.component.html',
  styleUrls: ['./iglu-otros-modal.component.styl']
})
export class IgluOtrosModalComponent implements OnInit {

  public isDisabled: boolean = true;
  public checkInput: boolean = false;
  public checkTextArea: boolean = false;
  public retiro: number;
  public coment: string;
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
      this.checkInput = true;
    } else {
      this.checkInput = false;
    }
    this.checkAll();
  }

  public checkArea($event): void{
    if ($event.target.value !== "") {
      this.checkTextArea = true;
    } else {
      this.checkTextArea = false;
    }
    this.checkAll();
  }

  public checkAll(): void{
    this.isDisabled = !(this.checkInput && this.checkTextArea);
  }

  public sendFactura(): void{
    const otro = {
      Id_caja: this.cajaOpen.Id_caja,
      Id_empleado: +this.emplActivo.Id_empleado,
      Precio: this.retiro,
      Comentario: this.coment
    } as Otros;

    console.log(otro);
    this.facturaDataService.addOtrosFactura(otro).subscribe(producto => this.httpSnackBarService.openSnackBar("Factura Otros", "OK"), error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

}
