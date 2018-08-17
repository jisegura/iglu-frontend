import { Injectable } from '@angular/core';
import { Categoria } from './producto.model';
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
export class CategoriaDataService {

  private categoriaUrl: string = "categoria/";
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
  ) {
    this.handleError = httpErrorHandler.createHandleError('CategoriaService');
  }

  public getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.categoriaUrl).pipe(
      catchError(this.handleError('getCategoria', []))
    );
  }

  public addCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.categoriaUrl, categoria, httpOptions).pipe(
      catchError(this.handleError('addCategoria', categoria))
    );
  }

}
