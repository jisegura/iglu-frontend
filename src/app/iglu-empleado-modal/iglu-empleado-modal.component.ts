import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';
import { Observable } from 'rxjs'

export class MODE {
  public POST: string = "POST";
  public PUT: string = "PUT";
  public DELETE: string = "DELETE";
}

@Component({
  selector: 'app-iglu-empleado-modal',
  templateUrl: './iglu-empleado-modal.component.html',
  styleUrls: ['./iglu-empleado-modal.component.styl']
})
export class IgluEmpleadoModalComponent implements OnInit {

  public hide: boolean = true;
  public isDisabled: boolean;
  private mode: MODE;
  private nameInputComplete: boolean;
  private selectInputComplete: boolean;
  private pwInputComplete: boolean;
  private empleados: Observable<Empleado[]>;
  private empleado: Empleado;
  private empleadoCopy: Empleado;

  private pw: string = "pw";

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private empleadoDataService: EmpleadoDataService
  ) { }

  ngOnInit() {
    this.isDisabled = true;
    this.mode = new MODE;
    this.nameInputComplete = false;
    this.selectInputComplete = false;
    this.pwInputComplete = false;
    this.empleado = new Empleado(0,"","");
    this.empleadoCopy = new Empleado(0,"","");
    this.empleados = this.empleadoDataService.empleados;
  }

  public getTitulo(): string{
    if (this.mode.POST == this.data.titulo) {
      return "Agregar";
    } else if (this.mode.PUT == this.data.titulo) {
      return "Editar";
    } else {
      return "Eliminar";
    }
  }

  public showPOST(): boolean{
    return this.mode.POST === this.data.titulo;
  }

  public showPUT(): boolean{
    return this.mode.PUT === this.data.titulo;
  }

  public showDELETE(): boolean{
    return this.mode.DELETE === this.data.titulo;
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

  public onPassInput($event): void{
    if ($event.target.value === this.pw) {
      this.pwInputComplete = true;
    } else {
      this.pwInputComplete = false;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.pwInputComplete) {
      if (this.mode.POST == this.data.titulo) {
        this.isDisabled = !(this.nameInputComplete);
      } else if (this.mode.PUT == this.data.titulo) {
        this.isDisabled = !(this.selectInputComplete && this.nameInputComplete);
      } else {
        this.isDisabled = !(this.selectInputComplete);
      }
    } else {
      this.isDisabled = true;
    }
  }

  public dataSend(): void{
    if (this.mode.POST == this.data.titulo) {
      const postEmpleado: Empleado = {
        FirstName: this.empleado.FirstName,
        LastName: this.empleado.LastName
      } as Empleado;

      console.log(postEmpleado);
      //this.empleadoDataService.create(postEmpleado);
    } else if (this.mode.PUT == this.data.titulo) {
      const putEmpleado: Empleado = {
        Id_empleado: this.empleado.Id_empleado,
        FirstName: (this.empleado.FirstName !== "") ? this.empleado.FirstName : this.empleadoCopy.FirstName,
        LastName: (this.empleado.LastName !== "") ? this.empleado.LastName : this.empleadoCopy.LastName
      } as Empleado;

      console.log(putEmpleado);
      //this.empleadoDataService.update(putEmpleado);
    } else {
      const deleteEmpleadoId: number = this.empleado.Id_empleado;

      console.log(deleteEmpleadoId);
      //this.empleadoDataService.remove(deleteEmpleadoId);
    }
  }

}
