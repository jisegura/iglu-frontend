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
  private checkAdminPost: boolean = false;
  private hide: boolean = true;
  private rehide: boolean = true;
  private nameInputComplete: boolean;
  private apellInputComplete: boolean;
  private selectInputComplete: boolean;
  private passwordString: string = "";
  private rePasswordString: string = "";
  private errorString: string = "";
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

  public onUserInput($event): void{
    //this.empleado.LastName = $event.target.value;
    //this.apellInputComplete = true;
    console.log($event.target.value);
    console.log(this.passwordString, this.rePasswordString);
    console.log(this.checkErrorValue());
    this.validButtonEnviar();
  }

  public onPwInput($event): void{
    //this.empleado.LastName = $event.target.value;
    //this.apellInputComplete = true;
    this.passwordString = $event.target.value;
    console.log($event.target.value);
    this.checkErrorValue();
    this.validButtonEnviar();
  }

  public onRePwInput($event): void{
    //this.empleado.LastName = $event.target.value;
    //this.apellInputComplete = true;
    this.rePasswordString = $event.target.value;
    console.log($event.target.value);
    this.checkErrorValue();
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

  private checkErrorValue(): boolean{
    if (this.checkAdminPost) {
      if (this.passwordString === "") {
        this.errorString = "Las Contraseña No Puede Estar Vacia";
        return true;
      } else if (this.passwordString !== this.rePasswordString) {
        this.errorString = "Las Contraseñas No Coinciden";
        return true;
      }
      return false;
    }
    return false;
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
