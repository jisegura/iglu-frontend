import { Component, OnInit, Input } from '@angular/core';
import { CategoriaDataService } from '../categoria-data.service';
import { ViewsService, VistaAdmin } from '../views.service';
import { Categoria } from '../producto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iglu-categoria-admin-form',
  templateUrl: './iglu-categoria-admin-form.component.html',
  styleUrls: ['./iglu-categoria-admin-form.component.styl']
})
export class IgluCategoriaAdminFormComponent implements OnInit {

  @Input() public modo: string;
  public isDisabled: boolean;
  public vistaAdminActive: VistaAdmin;
  private nameInputComplete: boolean;
  private selectInputComplete: boolean;
  private categorias: Observable<Categoria[]>;
  private categoria: Categoria;
  private categoriaCopy: Categoria;

  public constructor(
    private categoriaDataService: CategoriaDataService,
    private viewsService: ViewsService
  ) { }

  public ngOnInit(): void{
    this.isDisabled = true;
    this.nameInputComplete = false;
    this.selectInputComplete = false;
    this.categoria = new Categoria(0,"");
    this.categoriaCopy = new Categoria(0,"");
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

  public onNameInput($event): void{
    if ($event.target.value === "") {
      this.nameInputComplete = false;
    } else {
      this.nameInputComplete = true;
      this.categoria.Nombre = $event.target.value;
    }
    this.validButtonEnviar();
  }

  public putCategoriaId(categoria: Categoria): boolean{
    if (categoria.Id_categoria === this.categoria.Id_categoria) {
      this.categoriaCopy.Nombre = categoria.Nombre;
      return true;
    }
    return false;
  }

  public onSelectInput(value: string): void{
    if (value === "") {
      this.selectInputComplete = false;
    } else {
      this.selectInputComplete = true;
      this.categoria.Id_categoria = +value;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.modo == 'POST') {
      this.isDisabled = !(this.nameInputComplete);
    } else if (this.modo == 'PUT') {
      this.isDisabled = !(this.selectInputComplete && this.nameInputComplete);
    } else {
      this.isDisabled = !(this.selectInputComplete);
    }
  }

  public dataSend(): void{
    if (this.modo == 'POST') {
      const postCategoria: Categoria = {
        Nombre: this.categoria.Nombre
      } as Categoria;

      this.categoriaDataService.create(postCategoria);
    } else if (this.modo == 'PUT') {
      const putCategoria: Categoria = {
        Id_categoria: this.categoria.Id_categoria,
        Nombre: (this.categoria.Nombre !== "") ? this.categoria.Nombre : this.categoriaCopy.Nombre
      } as Categoria;

      this.categoriaDataService.update(putCategoria);
    } else {
      const deleteCategoriaId: number = this.categoria.Id_categoria;

      this.categoriaDataService.remove(deleteCategoriaId);
    }
    // Sale de la vista
    this.vistaAdminActive.active = "NONE";
  }

}
