import { Injectable } from '@angular/core';
import { Caja } from './caja.model';
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
export class CajaDataService {

  public cajaOpen: Observable<Caja>;
  private _cajaOpen: BehaviorSubject<Caja>;
  private dataStoreOpen: {
    caja: Caja
  };
  public cajas: Observable<Caja[]>;
  private cajaUrl: string;
  private handleError: HandleError;
  private _cajas: BehaviorSubject<Caja[]>;
  private dataStore: {
    cajas: Caja[]
  };

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    public httpSnackBarService: HttpSnackBarService
  ) {
    this.cajaUrl = "caja/";
    this.dataStore = { cajas: [] };
    this.dataStoreOpen = { caja: {} as Caja };
    this._cajas = <BehaviorSubject<Caja[]>> new BehaviorSubject([]);
    this._cajaOpen = <BehaviorSubject<Caja>> new BehaviorSubject({});
    this.cajas = this._cajas.asObservable();
    this.cajaOpen = this._cajaOpen.asObservable();
    this.handleError = httpErrorHandler.createHandleError('CajaService');
  }

  public loadAll(): void{
    this.getCaja().subscribe(cajas => {
      this.dataStore.cajas = cajas;
      this._cajas.next(Object.assign({}, this.dataStore).cajas);
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public loadCajaOpen(): void{
    this.getCajaOpen().subscribe(caja => {
      this.dataStoreOpen.caja = caja;
      this._cajaOpen.next(Object.assign({}, this.dataStoreOpen).caja);
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public create(caja: Caja): void{
    this.abrirCaja(caja).subscribe(caja => {
      this.dataStoreOpen.caja = caja;
      this._cajaOpen.next(Object.assign({}, this.dataStoreOpen).caja);
      this.httpSnackBarService.openSnackBar("Caja.create", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public update(caja: Caja): void{
    this.updateCaja(caja).subscribe(caja => {
      this.dataStore.cajas.forEach((item, index) => {
        if (item.Id_caja === caja.Id_caja) {
          this.dataStore.cajas[index] = caja;
        }
      });

      this._cajas.next(Object.assign({}, this.dataStore).cajas);
      this.httpSnackBarService.openSnackBar("Caja.update", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public remove(id: number): void{
    this.deleteCaja(id).subscribe(response => {
      this.dataStore.cajas.forEach((item, index) => {
        if (item.Id_caja === id) {
          this.dataStore.cajas.splice(index, 1);
        }
      });

      this._cajas.next(Object.assign({}, this.dataStore).cajas);
      this.httpSnackBarService.openSnackBar("Caja.remove", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public getCaja(): Observable<Caja[]>{
    return this.http.get<Caja[]>(this.cajaUrl).pipe(
      catchError(this.handleError('getCaja', []))
    );
  }

  public getCajaOpen(): Observable<Caja>{
    const url = `${this.cajaUrl}open/`;

    return this.http.get<Caja>(url).pipe(
      catchError(this.handleError('getCajaOpen', {} as Caja))
    );
  }

  public abrirCaja(caja: Caja): Observable<Caja>{
    return this.http.post<Caja>(this.cajaUrl, caja, httpOptions).pipe(
      catchError(this.handleError('abrirCaja', caja))
    );
  }

  public updateCaja(caja: Caja): Observable<Caja>{
    return this.http.put<Caja>(this.cajaUrl, caja, httpOptions).pipe(
      catchError(this.handleError('updateCaja', caja))
    );
  }

  public deleteCaja(id: number): Observable<{}>{
    const url = `${this.cajaUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteCaja'))
    );
  }



}
