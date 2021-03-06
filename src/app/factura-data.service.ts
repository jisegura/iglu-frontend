import { Injectable } from '@angular/core';
import { Clientes, Retiros, Otros, FacturaByIdCaja, Factura } from './factura.model';
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
export class FacturaDataService {

  private facturaUrl: string;
  private handleError: HandleError;

  public lastFacturas: Observable<Factura[]>;
  private _lastFacturas: BehaviorSubject<Factura[]>;
  private dataStore: {
    lastFacturas: Factura[]
  };

  constructor(
  	private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    public httpSnackBarService: HttpSnackBarService
  ) {
    this.facturaUrl = "factura/";
    this.handleError = httpErrorHandler.createHandleError('FacturaService');
    this.dataStore = { lastFacturas: [] };
    this._lastFacturas = <BehaviorSubject<Factura[]>> new BehaviorSubject([]);
    this.lastFacturas = this._lastFacturas.asObservable();
  }

  public loadAllLastFacturas(id: number): void{
    this.getLastFacturas(id).subscribe(facturas => {
      this.dataStore.lastFacturas = facturas;
      this._lastFacturas.next(Object.assign({}, this.dataStore).lastFacturas);
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public getAllFacturasByIdCaja(id: number): Observable<Factura[]>{
    const url = `${this.facturaUrl}all/${id}`;
    return this.http.get<Factura[]>(url).pipe(
      catchError(this.handleError('getAllFactirasByIdCaja', []))
    );
  }

  public getClientesByIdCaja(id: number): Observable<Clientes[]>{
    const url = `${this.facturaUrl}clientes/${id}`;
    return this.http.get<Clientes[]>(url).pipe(
      catchError(this.handleError('getClientesByIdCaja', []))
    );
  }

  public getRetirosByIdCaja(id: number): Observable<Retiros[]>{
    const url = `${this.facturaUrl}retiros/${id}`;
    return this.http.get<Retiros[]>(url).pipe(
      catchError(this.handleError('getRetirosByIdCaja', []))
    );
  }

  public getOtrosByIdCaja(id: number): Observable<Otros[]>{
    const url = `${this.facturaUrl}otros/${id}`;
    return this.http.get<Otros[]>(url).pipe(
      catchError(this.handleError('getOtrosByIdCaja', []))
    );
  }

  public addClienteFactura(cliente: Clientes): Observable<Clientes>{
    const url = `${this.facturaUrl}clientes/`;
    return this.http.post<Clientes>(url, cliente, httpOptions).pipe(
      catchError(this.handleError('addClienteFactura', cliente))
    );
  }

  public addRetirosFactura(retiro: Retiros): Observable<Retiros>{
    const url = `${this.facturaUrl}retiros/`;
    return this.http.post<Clientes>(url, retiro, httpOptions).pipe(
      catchError(this.handleError('addRetiroFactura', retiro))
    );
  }

  public addOtrosFactura(otro: Otros): Observable<Otros>{
    const url = `${this.facturaUrl}otros/`;
    return this.http.post<Otros>(url, otro, httpOptions).pipe(
      catchError(this.handleError('addOtroFactura', otro))
    );
  }

  public updateFactura(factura: Factura): Observable<Factura>{
    return this.http.put<Factura>(this.facturaUrl, factura, httpOptions).pipe(
      catchError(this.handleError('updateFactura', factura))
    );
  }

  public getLastFacturas(id: number): Observable<Factura[]>{
    const url = `${this.facturaUrl}ultimas/${id}`;
    return this.http.get<Factura[]>(url).pipe(
      catchError(this.handleError('getLastFacturas', []))
    );
  }

}
