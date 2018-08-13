import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { Observable, of, } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  producto: Producto[] = [{
    "id": 1,
    "name": "1 Kilo",
    "price": 200,
    "image": '/images/porter.jpg'
  },
  {
    "id": 2,
    "name": "Bombom",
    "price": 60,
    "image": '/images/porter.jpg'
  },
  {
    "id": 3,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 4,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 5,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 6,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 7,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 8,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 9,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 10,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 11,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 12,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 13,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 14,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 15,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 16,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 17,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 18,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 19,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 20,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 21,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 22,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 23,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 24,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  },
  {
    "id": 25,
    "name": "Cafe",
    "price": 80,
    "image": '/images/porter.jpg'
  }];

  constructor(/*private http: Http*/) { }

  getProductos(): Observable<Producto[]>{
    return of(this.producto);
  }

  /*getProductos(): Observable<Producto[]>{
    return this.http.get('http://192.168.1.35:3000/producto').pipe(map(response => {
                          let producto = response.json();
                          return <Producto[]>Object.keys(producto).map(key => Object.assign({ key }, producto[key]));
    }))
  }*/
}
