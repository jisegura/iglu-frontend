import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CategoriaDataService } from '../categoria-data.service';
import { Categoria } from '../producto.model';
import { Observable } from 'rxjs';

export class MODE {
  public POST: string = "POST";
  public PUT: string = "PUT";
  public DELETE: string = "DELETE";
}

@Component({
  selector: 'app-iglu-categoria-modal',
  templateUrl: './iglu-categoria-modal.component.html',
  styleUrls: ['./iglu-categoria-modal.component.styl']
})
export class IgluCategoriaModalComponent implements OnInit {

  public hide: boolean = true;
  public isDisabled: boolean;
  private mode: MODE;
  private nameInputComplete: boolean;
  private selectInputComplete: boolean;
  private pwInputComplete: boolean;
  private categorias: Observable<Categoria[]>;
  private categoria: Categoria;
  private categoriaCopy: Categoria;

  private pw: string = "pw";

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaDataService: CategoriaDataService
  ) { }

  public ngOnInit(): void{
    this.isDisabled = true;
    this.mode = new MODE;
    this.nameInputComplete = false;
    this.selectInputComplete = false;
    this.pwInputComplete = false;
    this.categoria = new Categoria(0,"");
    this.categoriaCopy = new Categoria(0,"");
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
        this.isDisabled = !(this.nameInputComplete);
      } else if (this.mode.PUT == this.data.titulo) {
        this.isDisabled = !(this.selectInputComplete && this.nameInputComplete);
      } else {
        this.isDisabled = !(this.selectInputComplete);
      }
    } else {
      this.isDisabled = true;
    }
  }

  public dataSend(): void{
    if (this.mode.POST == this.data.titulo) {
      const postCategoria: Categoria = {
        Nombre: this.categoria.Nombre
      } as Categoria;

      this.categoriaDataService.create(postCategoria);
    } else if (this.mode.PUT == this.data.titulo) {
      const putCategoria: Categoria = {
        Id_categoria: this.categoria.Id_categoria,
        Nombre: (this.categoria.Nombre !== "") ? this.categoria.Nombre : this.categoriaCopy.Nombre
      } as Categoria;

      this.categoriaDataService.update(putCategoria);
    } else {
      const deleteCategoriaId: number = this.categoria.Id_categoria;

      this.categoriaDataService.remove(deleteCategoriaId);
    }
  }


}
