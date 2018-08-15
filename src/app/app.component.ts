import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'iglu';

  @ViewChild('sidenav') public sidenav: MatSidenav;

  public constructor(
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void{
    this.sidenavService
      .setSidenav(this.sidenav);
  }

}
