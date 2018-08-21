import { Component, OnInit, Input } from '@angular/core';
import { ProductoDataService } from '../producto-data.service';
import { CategoriaDataService } from '../categoria-data.service';
import { ViewsService, VistaAdmin } from '../views.service';
import { Producto, Categoria } from '../producto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-producto-admin-form',
  templateUrl: './iglu-producto-admin-form.component.html',
  styleUrls: ['./iglu-producto-admin-form.component.styl']
})
export class IgluProductoAdminFormComponent implements OnInit {

  @Input() public modo: string;
  public isDisabled: boolean;
  public selectCate: string;
  public vistaAdminActive: VistaAdmin;
  private nameInputComplete: boolean;
  private priceInputComplete: boolean;
  private cateSelectComplete: boolean;
  private selectInputComplete: boolean;
  private productos: Observable<Producto[]>;
  private categorias: Observable<Categoria[]>;
  private producto: Producto;
  private productoCopy: Producto;

  constructor(
    private productoDataService: ProductoDataService,
    private categoriaDataService: CategoriaDataService,
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.isDisabled = true;
    this.nameInputComplete = false;
    this.priceInputComplete = false;
    this.cateSelectComplete = false;
    this.selectInputComplete = false;
    this.producto = new Producto(0,0,"",0);
    this.productoCopy = new Producto(0,0,"",0);
    this.productos = this.productoDataService.productos;
    this.categorias = this.categoriaDataService.categorias;
    this.viewsService
      .getAdminVistaActive()
      .subscribe(vistaAdminActive => this.vistaAdminActive = vistaAdminActive);
  }

  public getTitulo(): string{
    if (this.modo == 'POST') {
      return "Agregar";
    } else if (this.modo == 'PUT') {
      return "Editar";
    } else {
      return "Eliminar";
    }
  }

  public showPOST(): boolean{
    return this.modo == 'POST';
  }

  public showPUT(): boolean{
    return this.modo == 'PUT';
  }

  public showDELETE(): boolean{
    return this.modo == 'DELETE';
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

  private validButtonEnviar(): void{
    if (this.modo == 'POST') {
      this.isDisabled = !(this.nameInputComplete && this.priceInputComplete && this.cateSelectComplete);
    } else if (this.modo == 'PUT') {
      this.isDisabled = !(this.selectInputComplete && (this.nameInputComplete || this.priceInputComplete || this.cateSelectComplete));
    } else {
      this.isDisabled = !(this.selectInputComplete);
    }
  }

  public dataSend(): void{
    if (this.modo == 'POST') {
      const postProducto: Producto = {
        Id_categoria: this.producto.Id_categoria,
        Nombre: this.producto.Nombre,
        Precio: this.producto.Precio,
        Imagen: this.producto.Imagen
      } as Producto;

      this.productoDataService.create(postProducto);
    } else if (this.modo == 'PUT') {
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

    this.vistaAdminActive.active = "NONE";

  }

}
