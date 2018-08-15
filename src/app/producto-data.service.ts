import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { Observable, of, } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  public producto: Producto[] = [{
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

  public constructor(/*private http: Http*/) { }

  public getProductos(): Observable<Producto[]>{
    return of(this.producto);
  }

  /*getProductos(): Observable<Producto[]>{
    return this.http.get('http://192.168.1.35:3000/producto').pipe(map(response => {
                          let producto = response.json();
                          return <Producto[]>Object.keys(producto).map(key => Object.assign({ key }, producto[key]));
    }))
  }*/
}
