import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProductoDataService } from '../producto-data.service';
import { CategoriaDataService } from '../categoria-data.service';
import { Producto, Categoria } from '../producto.model';
import { Observable } from 'rxjs';

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
  public selectCate: string;
  private mode: MODE;
  private nameInputComplete: boolean;
  private priceInputComplete: boolean;
  private cateSelectComplete: boolean;
  private selectInputComplete: boolean;
  private pwInputComplete: boolean;
  private productos: Observable<Producto[]>;
  private categorias: Observable<Categoria[]>;
  private producto: Producto;
  private productoCopy: Producto;

  private pw: string = "pw";

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productoDataService: ProductoDataService,
    private categoriaDataService: CategoriaDataService
  ) { }

  public ngOnInit(): void{
    this.isDisabled = true;
    this.mode = new MODE;
    this.nameInputComplete = false;
    this.priceInputComplete = false;
    this.cateSelectComplete = false;
    this.selectInputComplete = false;
    this.pwInputComplete = false;
    this.producto = new Producto(0,0,"",0);
    this.productoCopy = new Producto(0,0,"",0);
    this.productos = this.productoDataService.productos;
    this.categorias = this.categoriaDataService.categorias;
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

  public showPOST(): boolean{
    return this.mode.POST === this.data.titulo;
  }

  public showPUT(): boolean{
    return this.mode.PUT === this.data.titulo;
  }

  public showDELETE(): boolean{
    return this.mode.DELETE === this.data.titulo;
  }

  public putProductoId(producto: Producto): boolean{
    if (producto.Id_producto === this.producto.Id_producto) {
      this.productoCopy.Nombre = producto.Nombre;
      this.productoCopy.Id_categoria = producto.Id_categoria;
      this.productoCopy.Precio = producto.Precio;
      this.productoCopy.Imagen = producto.Imagen;
      this.selectCate = String(producto.Id_categoria);
      return true;
    }
    return false;
  }

  public onNameInput($event): void{
    if ($event.target.value === "") {
      this.nameInputComplete = false;
    } else {
      this.nameInputComplete = true;
      this.producto.Nombre = $event.target.value;
    }
    this.validButtonEnviar();
  }

  public onSelectInput(value: string): void{
    if (value === "") {
      this.selectInputComplete = false;
    } else {
      this.selectInputComplete = true;
      this.producto.Id_producto = +value;
    }
    this.validButtonEnviar();
  }

  public onPriceInput($event): void{
    if ($event.target.value === "") {
      this.priceInputComplete = false;
    } else {
      this.priceInputComplete = true;
      this.producto.Precio = +$event.target.value;
    }
    this.validButtonEnviar();
  }

  public onCateSelect(value: string): void{
    if (value === "") {
      this.cateSelectComplete = false;
    } else {
      this.cateSelectComplete = true;
      this.producto.Id_categoria = +value;
    }
    this.validButtonEnviar();
  }

  public onPassInput($event): void{
    if ($event.target.value === this.pw) {
      this.pwInputComplete = true;
    } else {
      this.pwInputComplete = false;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.pwInputComplete) {
      if (this.mode.POST == this.data.titulo) {
        this.isDisabled = !(this.nameInputComplete && this.priceInputComplete && this.cateSelectComplete);
      } else if (this.mode.PUT == this.data.titulo) {
        this.isDisabled = !(this.selectInputComplete && (this.nameInputComplete || this.priceInputComplete || this.cateSelectComplete));
      } else {
        this.isDisabled = !(this.selectInputComplete);
      }
    } else {
      this.isDisabled = true;
    }
  }

  public dataSend(): void{
    if (this.mode.POST == this.data.titulo) {
      const postProducto: Producto = {
        Id_categoria: this.producto.Id_categoria,
        Nombre: this.producto.Nombre,
        Precio: this.producto.Precio,
        Imagen: this.producto.Imagen
      } as Producto;

      this.productoDataService.create(postProducto);
    } else if (this.mode.PUT == this.data.titulo) {
      const putProducto: Producto = {
        Id_producto: this.producto.Id_producto,
        Id_categoria: (this.producto.Id_categoria !== 0) ? this.producto.Id_categoria : this.productoCopy.Id_categoria,
        Nombre: (this.producto.Nombre !== "") ? this.producto.Nombre : this.productoCopy.Nombre,
        Precio: (this.producto.Precio !== 0) ? this.producto.Precio : this.productoCopy.Precio,
        Imagen: this.producto.Imagen
      } as Producto;

      this.productoDataService.update(putProducto);
    } else {
      const deleteCategoriaId: number = this.producto.Id_producto;

      this.productoDataService.remove(deleteCategoriaId);
    }

  }

}
