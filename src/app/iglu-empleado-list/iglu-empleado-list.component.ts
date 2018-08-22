import { Component, OnInit } from '@angular/core';
import { EmpleadoDataService } from '../empleado-data.service';
import { EmpleadoActiveService } from '../empleado-active.service';
import { Empleado, EmpleadoActivo } from '../empleado.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-empleado-list',
  templateUrl: './iglu-empleado-list.component.html',
  styleUrls: ['./iglu-empleado-list.component.styl']
})
export class IgluEmpleadoListComponent implements OnInit {

  public empleados: Observable<Empleado[]>;
  public empleadoActivo: EmpleadoActivo[];

  constructor(
  	private empleadoDataService: EmpleadoDataService,
    private empleadoActiveService: EmpleadoActiveService
  ) { }

  ngOnInit() {
    this.empleados = this.empleadoDataService.empleados;
    this.empleadoActiveService.getEmpleados().subscribe(empl => this.empleadoActivo = empl);
  }

}
