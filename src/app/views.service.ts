import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class VistaActive {
  public active: "ADMIN" | "CLIENTE";
}

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  public vistaActive: VistaActive = { active: "CLIENTE" };

  public constructor() { }

  public getVistaActive(): Observable<VistaActive>{
    return of(this.vistaActive);
  }
}
