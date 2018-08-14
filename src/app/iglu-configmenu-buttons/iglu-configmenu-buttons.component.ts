import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-iglu-configmenu-buttons',
  templateUrl: './iglu-configmenu-buttons.component.html',
  styleUrls: ['./iglu-configmenu-buttons.component.styl']
})
export class IgluConfigmenuButtonsComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }

  public toggleSidenav(): void{
    this.sidenavService
      .toggle()
      .then(() => { });
  }

}
