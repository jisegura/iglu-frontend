import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoDataService } from '../empleado-data.service';
import { ViewsService, VistaAdmin } from '../views.service';
import { Empleado } from '../empleado.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-iglu-empleado-admin-form',
  templateUrl: './iglu-empleado-admin-form.component.html',
  styleUrls: ['./iglu-empleado-admin-form.component.styl']
})
export class IgluEmpleadoAdminFormComponent implements OnInit {

	@Input() public modo: string;
  public isDisabled: boolean;
  public vistaAdminActive: VistaAdmin;
  private nameInputComplete: boolean;
  private apellInputComplete: boolean;
  private selectInputComplete: boolean;
  private empleados: Observable<Empleado[]>;
  private empleado: Empleado;
  private empleadoCopy: Empleado;

  constructor(
    private empleadoDataService: EmpleadoDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.isDisabled = true;
    this.nameInputComplete = false;
    this.apellInputComplete = false;
    this.selectInputComplete = false;
    this.empleado = new Empleado(0,"","");
    this.empleadoCopy = new Empleado(0,"","");
    this.empleados = this.empleadoDataService.empleados;
    this.viewsService
      .getAdminVistaActive()
      .subscribe(vistaAdminActive => this.vistaAdminActive = vistaAdminActive);
  }

  public getTitulo(): string{
    if (this.modo == 'POST') {
      return "Agregar";
    } else if (this.modo == 'PUT') {
      return "Editar";
    } else {
      return "Eliminar";
    }
  }

  public showPOST(): boolean{
    return this.modo == 'POST';
  }

  public showPUT(): boolean{
    return this.modo == 'PUT';
  }

  public showDELETE(): boolean{
    return this.modo == 'DELETE';
  }

  public showNameApell(empleado: Empleado): string{
    return empleado.FirstName + " " + empleado.LastName;
  }

  public onNameInput($event): void{
    if ($event.target.value === "") {
      this.nameInputComplete = false;
    } else {
      this.nameInputComplete = true;
      this.empleado.FirstName = $event.target.value;
    }
    this.validButtonEnviar();
  }

  public onApellInput($event): void{
    this.empleado.LastName = $event.target.value;
    this.apellInputComplete = true;
    this.validButtonEnviar();
  }

  public putEmpleadoId(empleado: Empleado): boolean{
    if (empleado.Id_empleado === this.empleado.Id_empleado) {
      this.empleadoCopy.FirstName = empleado.FirstName;
      this.empleadoCopy.LastName = empleado.LastName;
      return true;
    }
    return false;
  }

  public onSelectInput(value: string): void{
    if (value === "") {
      this.selectInputComplete = false;
    } else {
      this.selectInputComplete = true;
      this.empleado.Id_empleado = +value;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.modo == 'POST') {
      this.isDisabled = !(this.nameInputComplete);
    } else if (this.modo == 'PUT') {
      this.isDisabled = !(this.selectInputComplete && (this.nameInputComplete || this.apellInputComplete));
    } else {
      this.isDisabled = !(this.selectInputComplete);
    }
  }

  public dataSend(): void{
    if (this.modo == 'POST') {
      const postEmpleado: Empleado = {
        FirstName: this.empleado.FirstName,
        LastName: this.empleado.LastName
      } as Empleado;

      this.empleadoDataService.create(postEmpleado);
    } else if (this.modo == 'PUT') {
      const putEmpleado: Empleado = {
        Id_empleado: this.empleado.Id_empleado,
        FirstName: (this.empleado.FirstName !== "") ? this.empleado.FirstName : this.empleadoCopy.FirstName,
        LastName: (this.empleado.LastName !== "") ? this.empleado.LastName : this.empleadoCopy.LastName
      } as Empleado;

      this.empleadoDataService.update(putEmpleado);
    } else {
      const deleteEmpleadoId: number = this.empleado.Id_empleado;

      this.empleadoDataService.remove(deleteEmpleadoId);
    }

    this.vistaAdminActive.active = "NONE";
  }

}
