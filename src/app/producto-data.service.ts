import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
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
export class ProductoDataService {

  public productos: Observable<Producto[]>;
  private productoUrl: string;
  private handleError: HandleError;
  private _productos: BehaviorSubject<Producto[]>;
  private dataStore: {
    productos: Producto[]
  };

  public constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    public httpSnackBarService: HttpSnackBarService
  ) {
    this.productoUrl = "producto/";
    this.dataStore = { productos: [] };
    this._productos = <BehaviorSubject<Producto[]>> new BehaviorSubject([]);
    this.productos = this._productos.asObservable();
  	this.handleError = httpErrorHandler.createHandleError('ProductoService');
  }

  public loadAll(): void{
    this.getProducto().subscribe(producto => {
      this.dataStore.productos = producto;
      this._productos.next(Object.assign({}, this.dataStore).productos);
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public create(producto: Producto): void{
    this.addProducto(producto).subscribe(producto => {
      this.dataStore.productos.push(producto);
      this._productos.next(Object.assign({}, this.dataStore).productos);
      this.httpSnackBarService.openSnackBar("Producto.create", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public update(producto: Producto): void{
    this.updateProducto(producto).subscribe(producto => {
      this.dataStore.productos.forEach((item, index) => {
        if (item.Id_producto === producto.Id_producto) {
          this.dataStore.productos[index] = producto;
        }
      });

      this._productos.next(Object.assign({}, this.dataStore).productos);
      this.httpSnackBarService.openSnackBar("Producto.update", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public remove(id: number): void{
    this.deleteProducto(id).subscribe(response => {
      this.dataStore.productos.forEach((item, index) => {
        if (item.Id_producto === id) {
          this.dataStore.productos.splice(index, 1);
        }
      });

      this._productos.next(Object.assign({}, this.dataStore).productos);
      this.httpSnackBarService.openSnackBar("Producto.remove", "OK");
    }, error => this.httpSnackBarService.openSnackBar(error, "ERROR"));
  }

  public getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.productoUrl).pipe(
    	catchError(this.handleError('getProductos', []))
    );
  }

  public addProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.productoUrl, producto, httpOptions).pipe(
      catchError(this.handleError('addProducto', producto))
    );
  }

  public updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(this.productoUrl, producto, httpOptions).pipe(
      catchError(this.handleError('updateCategoria', producto))
    );
  }

  public deleteProducto(id: number): Observable<{}>{
    const url = `${this.productoUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteCategoria'))
    );
  }

  /*getProductos(): Observable<Producto[]>{
    return this.http.get('http://192.168.1.35:3000/producto').pipe(map(response => {
                          let producto = response.json();
                          return <Producto[]>Object.keys(producto).map(key => Object.assign({ key }, producto[key]));
    }))
  }*/
}
