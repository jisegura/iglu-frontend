import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-iglu-view-cliente',
  templateUrl: './iglu-view-cliente.component.html',
  styleUrls: ['./iglu-view-cliente.component.styl']
})
export class IgluViewClienteComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.sidenavService
      .setSidenav(this.sidenav);
  }

}
