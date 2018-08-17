import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  public producto1: Producto[] = [{
    "id_producto": 1,
    "nombre": "1 Kilo",
    "precio": 200,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 2,
    "nombre": "Bombom",
    "precio": 60,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 3,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
  {
    "id_producto": 4,
    "nombre": "Cafe",
    "precio": 80,
    "imagen": '/images/porter.jpg'
  },
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
  }];

  public producto: Observable<Producto[]>;
  private _productos: BehaviorSubject<Producto[]>;
  private baseUrl: string;
  private dataStore: {
    productos: Producto[]
  };

  public constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://192.168.1.38:3000";
    this.dataStore = { productos: [] };
    this._productos = <BehaviorSubject<Producto[]>> new BehaviorSubject([]);
    this.producto = this.getProducto();
  }

  public get productos(): Observable<Producto[]>{
    return this._productos.asObservable();
  }

  public getProducto(): Observable<Producto[]> {
    const productoUrl: string = this.baseUrl + "/producto/";
    return this.http.get<Producto[]>(productoUrl).pipe(map(response => {
      let prod = response;
      return <Producto[]>Object.keys(prod).map(key => Object.assign({ key }, prod[key]));
    }))
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
