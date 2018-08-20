import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IgluProductoModalComponent } from '../iglu-producto-modal/iglu-producto-modal.component';
import { IgluCategoriaModalComponent } from '../iglu-categoria-modal/iglu-categoria-modal.component';
import { IgluEmpleadoModalComponent } from '../iglu-empleado-modal/iglu-empleado-modal.component';
import { IgluCajaModalComponent } from '../iglu-caja-modal/iglu-caja-modal.component';




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

  public openModalCate(modo: string): void{
    const dialogRef = this.dialog.open(IgluCategoriaModalComponent, {
      data: {
        titulo: modo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openModalProd(modo: string): void{
    const dialogRef = this.dialog.open(IgluProductoModalComponent, {
      data: {
        titulo: modo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openModalEmpl(modo: string): void{
    const dialogRef = this.dialog.open(IgluEmpleadoModalComponent, {
      data: {
        titulo: modo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openModalCaja(): void{
    const dialogRef = this.dialog.open(IgluCajaModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
