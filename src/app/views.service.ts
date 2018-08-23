import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class VistaActive {
  public active: "ADMIN" | "CLIENTE";
}

export class VistaAdmin {
  public active: "NONE" | "CATEGORIA" | "PRODUCTO" | "EMPLEADO" | "CAJA" | "CAJAOPEN";
}

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  public vistaActive: VistaActive = { active: "ADMIN" };
  public vistaAdminActive: VistaAdmin = { active: "NONE" };

  public constructor() { }

  public getVistaActive(): Observable<VistaActive>{
    return of(this.vistaActive);
  }

  public getAdminVistaActive(): Observable<VistaAdmin>{
    return of(this.vistaAdminActive);
  }
}
