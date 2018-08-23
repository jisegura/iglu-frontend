import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IgluCajaModalComponent } from '../iglu-caja-modal/iglu-caja-modal.component';
import { IgluRetidosModalComponent } from '../iglu-retidos-modal/iglu-retidos-modal.component';
import { IgluOtrosModalComponent } from '../iglu-otros-modal/iglu-otros-modal.component';





@Component({
  selector: 'app-iglu-sidebar',
  templateUrl: './iglu-sidebar.component.html',
  styleUrls: ['./iglu-sidebar.component.styl']
})
export class IgluSidebarComponent implements OnInit {

  public constructor(
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void{ }

  public openModalCaja(): void{
    const dialogRef = this.dialog.open(IgluCajaModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openModalRetiros(): void{
    const dialogRef = this.dialog.open(IgluRetidosModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openModalOtros(): void{
    const dialogRef = this.dialog.open(IgluOtrosModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
