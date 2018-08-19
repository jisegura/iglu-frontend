import { Injectable } from '@angular/core';
import { Categoria } from './producto.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
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
export class CategoriaDataService {

  public cateMock: Categoria[] = [{
    "Id_categoria": 1,
    "Nombre": "helado"
  },{
    "Id_categoria": 2,
    "Nombre": "caliente"
  },{
    "Id_categoria": 3,
    "Nombre": "EsCaLoFrIo"
  }];

  public categorias: Observable<Categoria[]>;
  private categoriaUrl: string;
  private handleError: HandleError;
  private _categorias: BehaviorSubject<Categoria[]>;
  private dataStore: {
    categorias: Categoria[]
  };

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
  ) {
    this.categoriaUrl = "categoria/";
    this.dataStore = { categorias: [] };
    this._categorias = <BehaviorSubject<Categoria[]>> new BehaviorSubject([]);
    this.categorias = this._categorias.asObservable();
    this.handleError = httpErrorHandler.createHandleError('CategoriaService');
  }

  public loadAll(): void{
    this.getCategoria().subscribe(categorias => {
      this.dataStore.categorias = categorias;
      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    });
  }

  public load(id: number | string): void{
    this.getCategoriaById(id).subscribe(categoria => {
      let notFound = true;

      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === categoria.Id_categoria) {
          this.dataStore.categorias[index] = categoria;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.categorias.push(categoria);
      }

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    });
  }

  public create(categoria: Categoria): void{
    this.addCategoria(categoria).subscribe(categoria => {
      this.dataStore.categorias.push(categoria);
      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    });
  }

  public update(categoria: Categoria): void{
    this.updateCategoria(categoria).subscribe(categoria => {
      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === categoria.Id_categoria) {
          this.dataStore.categorias[index] = categoria;
        }
      });

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    });
  }

  public remove(id: number): void{
    this.deleteCategoria(id).subscribe(response => {
      this.dataStore.categorias.forEach((item, index) => {
        if (item.Id_categoria === id) {
          this.dataStore.categorias.splice(index, 1);
        }
      });

      this._categorias.next(Object.assign({}, this.dataStore).categorias);
    });
  }

  public getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categoriaUrl).pipe(
      catchError(this.handleError('getCategoria', []))
    );
  }

  public getCategoriaById(id: number | string): Observable<Categoria>{
    const url = `${this.categoriaUrl}${id}`;
    return this.http.get<Categoria>(url).pipe(
      catchError(this.handleError<Categoria>(`getCategoriaById id=${id}`))
    );
  }

  public addCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.categoriaUrl, categoria, httpOptions).pipe(
      catchError(this.handleError('addCategoria', categoria))
    );
  }

  public updateCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(this.categoriaUrl, categoria, httpOptions).pipe(
      catchError(this.handleError('updateCategoria', categoria))
    );
  }

  public deleteCategoria(id: number): Observable<{}>{
    const url = `${this.categoriaUrl}${id}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteCategoria'))
    );
  }

  public getCatoMock(): Observable<Categoria[]>{
    return of(this.cateMock);
  }

}
