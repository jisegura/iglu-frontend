import { Component, OnInit } from '@angular/core';
import { ViewsService, VistaActive } from '../views.service';


@Component({
  selector: 'app-iglu-view-admin',
  templateUrl: './iglu-view-admin.component.html',
  styleUrls: ['./iglu-view-admin.component.styl']
})
export class IgluViewAdminComponent implements OnInit {

  public viewActive: VistaActive;

  public constructor(
    private viewsService: ViewsService
  ) { }

  public ngOnInit():void {
    this.viewsService
      .getVistaActive()
      .subscribe(viewActive => this.viewActive = viewActive);
  }

  public exitModeAdmin():void {
    this.viewActive.active = "CLIENTE";
  }

}
