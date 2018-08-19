import { Component, OnInit } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { MatDialog } from '@angular/material';
import { IgluProductoModalComponent } from '../iglu-producto-modal/iglu-producto-modal.component';
import { IgluCategoriaModalComponent } from '../iglu-categoria-modal/iglu-categoria-modal.component';


@Component({
  selector: 'app-iglu-sidebar',
  templateUrl: './iglu-sidebar.component.html',
  styleUrls: ['./iglu-sidebar.component.styl']
})
export class IgluSidebarComponent implements OnInit {

  public productos: Producto[] = [];

  public constructor(
    public dialog: MatDialog,
    private productoDataService: ProductoDataService
  ) { }

  public ngOnInit(): void{
    this.productoDataService
      .getProductos()
      .subscribe(productos => this.productos = productos);
  }

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

}
