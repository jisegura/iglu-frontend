import { Injectable } from '@angular/core';
import { EmpleadoActivo } from './empleado.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoActiveService {

  public empleado: EmpleadoActivo[] = [];

  constructor() { }

  public getEmpleados(): Observable<EmpleadoActivo[]>{
    return of(this.empleado);
  }
}
