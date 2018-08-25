import { Component, OnInit, Input } from '@angular/core';
import { Factura } from '../factura.model';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';
import { Observable } from 'rxjs';
import { FacturaDataService } from '../factura-data.service';
import { HttpSnackBarService } from '../http-snack-bar.service';
import { MatDialog } from '@angular/material';
import { IgluCajaCierreModalComponent } from '../iglu-caja-cierre-modal/iglu-caja-cierre-modal.component';





@Component({
  selector: 'app-iglu-caja-load-facturas',
  templateUrl: './iglu-caja-load-facturas.component.html',
  styleUrls: ['./iglu-caja-load-facturas.component.styl']
})
export class IgluCajaLoadFacturasComponent implements OnInit {

  @Input() public cajaId: number = 0;
  @Input() public cajaInicio: number = 0;
  private cajaFin: number = 0;
  private ingresos: number = 0;
  private retiros: number = 0;
  private gastos: number = 0;
  public facturas: Factura[];
  public empleados: Empleado[];
  public empleadosObs: Observable<Empleado[]>;
  public selectedEmpl: string = "all";
  public selectedFact: string = "all";


  constructor(
    public dialog: MatDialog,
    private facturaDataService: FacturaDataService,
    private empleadoDataService: EmpleadoDataService,
    private httpSnackBarService: HttpSnackBarService
  ) { }

  ngOnInit() {
    this.facturaDataService
      .getAllFacturasByIdCaja(this.cajaId)
      .subscribe(facturas => {
        this.facturas = facturas;
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
    this.empleadosObs = this.empleadoDataService.empleados;
    this.empleadosObs.subscribe(empl => this.empleados = empl);
  }

  public getEmpleadoName(idEmpl: number): string{
    let empl: Empleado = this.empleados.find(empl => empl.Id_empleado === idEmpl);
    return empl !== undefined ? empl.FirstName + " " + empl.LastName : "";
  }

  public getFacturaBaja(baja: string): string{
    return baja !== "" ? "[ESTA FACTURA SE DIO DE BAJA]" : "";
  }

  public isFactClientes(factura: Factura): boolean{
    return factura.FormaDePago.Valid && factura.Descuento.Valid && !factura.Comentario.Valid;
  }

  public isFactRetiros(factura: Factura): boolean{
    return !factura.FormaDePago.Valid && !factura.Descuento.Valid && !factura.Comentario.Valid;
  }

  public isFactOtros(factura: Factura): boolean{
    return !factura.FormaDePago.Valid && !factura.Descuento.Valid && factura.Comentario.Valid;
  }

  public alreadyBaja(factura: Factura): boolean{
    return (factura.ComentarioBaja === "") ? true : false;
  }

  public onSelectChange(): void{
    console.log(this.selectedEmpl, this.selectedFact);
  }//(selectionChange)="onSelectChange()"

  public filtroEmpl(fact: Factura): boolean{
    if (this.selectedEmpl !== "all") {
      return fact.Id_empleado === +this.selectedEmpl;
    }
    return true;
  }

  public filtroFact(fact: Factura): boolean{
    if (this.selectedFact !== "all") {
      if ("clientes" === this.selectedFact) {
        return this.isFactClientes(fact);
      } else if ("retiros" === this.selectedFact) {
        return this.isFactRetiros(fact);
      } else if ("gastos" === this.selectedFact) {
        return this.isFactOtros(fact);
      }
    }
    return true;
  }

  public calcCierreCaja(): void{
    let suma: number = this.cajaInicio;
    if (this.facturas !== undefined) {
      this.facturas.forEach(item => {
        if (this.alreadyBaja(item)) {
          if (this.isFactClientes(item)) {
            suma += item.Precio;
            this.ingresos += item.Precio;
          } else if (this.isFactRetiros(item)) {
            suma -= item.Precio;
            this.retiros += item.Precio;
          } else if (this.isFactOtros(item)) {
            suma -= item.Precio;
            this.gastos += item.Precio;
          }
        }
      });
    }
    this.cajaFin = suma;
  }

  public openDialog(): void{
    this.calcCierreCaja();

    const dialogRef = this.dialog.open(IgluCajaCierreModalComponent, {
      data: {
        cajaInicio: this.cajaInicio,
        ingresos: this.ingresos,
        retiros: this.retiros,
        gastos: this.gastos,
        cajaFin: this.cajaFin
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
