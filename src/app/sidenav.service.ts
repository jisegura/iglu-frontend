import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;

  public constructor() { }

  public setSidenav(sidenav: MatSidenav): void{
    this.sidenav = sidenav;
  }

  public open(): Promise<MatDrawerToggleResult>{
    return this.sidenav.open();
  }

  public close(): Promise<MatDrawerToggleResult>{
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult>{
    return this.sidenav.toggle(isOpen);
  }
}
