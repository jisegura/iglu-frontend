import { Component, OnInit } from '@angular/core';
import { EmpleadoDataService } from '../empleado-data.service';
import { Empleado } from '../empleado.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-empleado-list',
  templateUrl: './iglu-empleado-list.component.html',
  styleUrls: ['./iglu-empleado-list.component.styl']
})
export class IgluEmpleadoListComponent implements OnInit {

  public empleados: Observable<Empleado[]>;

  constructor(
  	private empleadoDataService: EmpleadoDataService
  ) { }

  ngOnInit() {
    this.empleados = this.empleadoDataService.empleados;
  }

}
