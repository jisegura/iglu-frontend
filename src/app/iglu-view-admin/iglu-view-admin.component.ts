import { Component, OnInit } from '@angular/core';
import { ViewsService, VistaActive, VistaAdmin } from '../views.service';


@Component({
  selector: 'app-iglu-view-admin',
  templateUrl: './iglu-view-admin.component.html',
  styleUrls: ['./iglu-view-admin.component.styl']
})
export class IgluViewAdminComponent implements OnInit {

  public viewActive: VistaActive;
  public viewAdminActive: VistaAdmin;

  public constructor(
    private viewsService: ViewsService
  ) { }

  public ngOnInit():void {
    this.viewsService
      .getVistaActive()
      .subscribe(viewActive => this.viewActive = viewActive);
    this.viewsService
      .getAdminVistaActive()
      .subscribe(viewAdminActive => this.viewAdminActive = viewAdminActive);
  }

  public exitModeAdmin():void {
    this.viewAdminActive.active = "NONE";
    this.viewActive.active = "CLIENTE";
  }

  public modeCategoria(): void{
    this.viewAdminActive.active = "CATEGORIA";
  }

  public modeProducto(): void{
    this.viewAdminActive.active = "PRODUCTO";
  }

  public modeEmpleado(): void{
    this.viewAdminActive.active = "EMPLEADO";
  }

  public isViewCategoria(): boolean{
    return this.viewAdminActive.active == "CATEGORIA";
  }

  public isViewProducto(): boolean{
    return this.viewAdminActive.active == "PRODUCTO";
  }

  public isViewEmpleado(): boolean{
    return this.viewAdminActive.active == "EMPLEADO";
  }

}
