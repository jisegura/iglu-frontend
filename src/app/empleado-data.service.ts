import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { HttpSnackBarService } from './http-snack-bar.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoDataService {

  public empleados: Observable<Empleado[]>;
  private empleadoUrl: string;
  private handleError: HandleError;
  private _empleados: BehaviorSubject<Empleado[]>;
  private dataStore: {
    empleados: Empleado[]
  };

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    public httpSnackBarService: HttpSnackBarService
  ) {
    this.empleadoUrl = "empleado/";
    this.dataStore = { empleados: [] };
    this._empleados = <BehaviorSubject<Empleado[]>> new BehaviorSubject([]);
    this.empleados = this._empleados.asObservable();
    this.handleError = httpErrorHandler.createHandleError('EmpleadoService');
  }

  public loadAll(): void{
    this.getEmpleado().subscribe(empleados => {
      this.dataStore.empleados = empleados;
      this._empleados.next(Object.assign({}, this.dataStore).empleados);
    }, error => this.httpSnackBarService.openSnackBar("Empleado.loadAll", "ERROR"));
  }

  public create(empleado: Empleado): void{
    this.addEmpleado(empleado).subscribe(empleado => {
      this.dataStore.empleados.push(empleado);
      this._empleados.next(Object.assign({}, this.dataStore).empleados);
      this.httpSnackBarService.openSnackBar("Empleado.create", "OK");
    }, error => this.httpSnackBarService.openSnackBar("Empleado.create", "ERROR"));
  }

  public update(empleado: Empleado): void{
    this.updateEmpleado(empleado).subscribe(empleado => {
      this.dataStore.empleados.forEach((item, index) => {
        if (item.Id_empleado === empleado.Id_empleado) {
          this.dataStore.empleados[index] = empleado;
        }
      });

      this._empleados.next(Object.assign({}, this.dataStore).empleados);
      this.httpSnackBarService.openSnackBar("Empleado.update", "OK");
    }, error => this.httpSnackBarService.openSnackBar("Empleado.update", "ERROR"));
  }

  public remove(id: number): void{
    this.deleteEmpleado(id).subscribe(response => {
      this.dataStore.empleados.forEach((item, index) => {
        if (item.Id_empleado === id) {
          this.dataStore.empleados.splice(index, 1);
        }
      });

      this._empleados.next(Object.assign({}, this.dataStore).empleados);
      this.httpSnackBarService.openSnackBar("Empleado.remove", "OK");
    }, error => this.httpSnackBarService.openSnackBar("Empleado.remove", "ERROR"));
  }

  public getEmpleado(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.empleadoUrl).pipe(
      catchError(this.handleError('getEmpleado', []))
    );
  }

  public addEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.empleadoUrl, empleado, httpOptions).pipe(
      catchError(this.handleError('addEmpleado', empleado))
    );
  }

  public updateEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.empleadoUrl, empleado, httpOptions).pipe(
      catchError(this.handleError('updateEmpleado', empleado))
    );
  }

  public deleteEmpleado(id: number): Observable<{}>{
    const url = `${this.empleadoUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteEmpleado'))
    );
  }


}
