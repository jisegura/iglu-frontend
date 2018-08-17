import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProductoDataService } from '../producto-data.service';
import { Producto } from '../producto.model';

export class MODE {
  public POST: string = "POST";
  public PUT: string = "PUT";
  public DELETE: string = "DELETE";
}

@Component({
  selector: 'app-iglu-producto-modal',
  templateUrl: './iglu-producto-modal.component.html',
  styleUrls: ['./iglu-producto-modal.component.styl']
})
export class IgluProductoModalComponent implements OnInit {

  public hide: boolean = true;
  public isDisabled: boolean;
  private mode: MODE;
  private nameInputComplete: boolean;
  private priceInputComplete: boolean;
  private productos: Producto[];

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productoDataService: ProductoDataService
  ) { }

  public ngOnInit(): void{
    this.isDisabled = true;
    this.mode = new MODE;
    this.nameInputComplete = false;
    this.priceInputComplete = false;
    this.productoDataService.getProductos().subscribe(productos => this.productos = productos);
  }

  public getTitulo(): string{
    if (this.mode.POST == this.data.titulo) {
      return "Agregar";
    } else if (this.mode.PUT == this.data.titulo) {
      return "Editar";
    } else {
      return "Eliminar";
    }
  }

  public showSelect(): boolean{
    if (this.mode.POST == this.data.titulo) {
      return false;
    }
    return true;
  }

  public showCheckBox(): boolean{
    if (this.mode.PUT == this.data.titulo) {
      return true;
    }
    return false;
  }

  public showInput(): boolean{
    if (this.mode.DELETE == this.data.titulo) {
      return false;
    }
    return true;
  }

  public onNameInput($event): void{
    if ($event.target.value === "") {
      this.nameInputComplete = false;
    } else {
      this.nameInputComplete = true;
    }
    this.validButtonEnviar();
  }

  public onPriceInput($event): void{
    if ($event.target.value === "") {
      this.priceInputComplete = false;
    } else {
      this.priceInputComplete = true;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.mode.POST == this.data.titulo) {
      this.isDisabled = !(this.nameInputComplete && this.priceInputComplete);
    } else if (this.mode.PUT == this.data.titulo) {
      //return "Editar";
    } else {
      //return "Eliminar";
    }
  }

  public dataSend(): void{
    const newProducto: Producto = {
      Nombre: "Te",
      Precio: 20.50,
      Imagen: "imgTe"
    } as Producto;

    this.productoDataService.addProducto(newProducto).subscribe(producto => this.productos.push(producto));
  }

}
