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

  public producto1: Producto[] = [{
    "Id_producto": 1,
    "Id_categoria": 1,
    "Nombre": "1 Kilo",
    "Precio": 200,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 2,
    "Id_categoria": 1,
    "Nombre": "Bombom",
    "Precio": 60,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 3,
    "Id_categoria": 1,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 4,
    "Id_categoria": 1,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 5,
    "Id_categoria": 2,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 6,
    "Id_categoria": 1,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 7,
    "Id_categoria": 3,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 8,
    "Id_categoria": 1,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 9,
    "Id_categoria": 3,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 10,
    "Id_categoria": 2,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 11,
    "Id_categoria": 3,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  }];/*,
  {
    "id_producto": 5,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 6,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 7,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 8,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 9,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 10,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 11,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 12,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 13,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 14,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 15,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 16,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 17,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 18,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 19,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 20,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 21,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 22,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 23,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 24,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 25,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  }];*/

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
      this.httpSnackBarService.openSnackBar("Producto.loadAll", "OK");
    }, error => this.httpSnackBarService.openSnackBar("Producto.loadAll", "ERROR"));
  }

  public create(producto: Producto): void{
    this.addProducto(producto).subscribe(producto => {
      this.dataStore.productos.push(producto);
      this._productos.next(Object.assign({}, this.dataStore).productos);
      this.httpSnackBarService.openSnackBar("Producto.create", "OK");
    }, error => this.httpSnackBarService.openSnackBar("Producto.create", "ERROR"));
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
    }, error => this.httpSnackBarService.openSnackBar("Producto.update", "ERROR"));
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
    }, error => this.httpSnackBarService.openSnackBar("Producto.remove", "ERROR"));
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

  public getProductos(): Observable<Producto[]>{
    return of(this.producto1);
  }

  /*getProductos(): Observable<Producto[]>{
    return this.http.get('http://192.168.1.35:3000/producto').pipe(map(response => {
                          let producto = response.json();
                          return <Producto[]>Object.keys(producto).map(key => Object.assign({ key }, producto[key]));
    }))
  }*/
}
