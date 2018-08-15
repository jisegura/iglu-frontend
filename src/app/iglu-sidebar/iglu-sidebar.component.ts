import { Component, OnInit } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';
import { MatDialog } from '@angular/material';
import { IgluProductoModalComponent } from '../iglu-producto-modal/iglu-producto-modal.component'

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

  public openModalProd(modo: string): void{
    const dialogRef = this.dialog.open(IgluProductoModalComponent, {
      data: {
        titulo: modo,
        productos: this.productos
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
