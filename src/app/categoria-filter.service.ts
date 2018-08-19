import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class CategoriaFilter {
	public active: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaFilterService {

  public categoriaActive: CategoriaFilter = { active: 1 };

  public constructor() { }

  public getCategoriaActive(): Observable<CategoriaFilter>{
    return of(this.categoriaActive);
  }
}
