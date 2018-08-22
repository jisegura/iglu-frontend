import { Injectable } from '@angular/core';
import { EmpleadoActivo } from './empleado.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoActiveService {

  public empleado: EmpleadoActivo = {
  	active: false,
  	Id_empleado: 0
  };

  constructor() { }

  public getEmpleados(): Observable<EmpleadoActivo>{
    return of(this.empleado);
  }
}
