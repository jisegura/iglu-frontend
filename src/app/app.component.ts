import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { ViewsService, VistaActive } from './views.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'iglu';

  public viewActive: VistaActive;

  public constructor(
    private viewsService: ViewsService
  ) { }

  public ngOnInit(): void{
    this.viewsService
      .getVistaActive()
      .subscribe(viewActive => this.viewActive = viewActive);
  }

  public isViewCliente(): boolean{
    return this.viewActive.active === "CLIENTE";
  }

  public isViewAdmin(): boolean{
    return this.viewActive.active === "ADMIN";
  }

}
