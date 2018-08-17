import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';


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
    "Nombre": "1 Kilo",
    "Precio": 200,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 2,
    "Nombre": "Bombom",
    "Precio": 60,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 3,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 4,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 5,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 6,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 7,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 8,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 9,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 10,
    "Nombre": "Cafe",
    "Precio": 80,
    "Imagen": '/images/porter.jpg'
  },
  {
    "Id_producto": 11,
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

  private productoUrl: string = "producto/";
  private handleError: HandleError;

  public constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
  ) { 
  	this.handleError = httpErrorHandler.createHandleError('ProductoService');
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
