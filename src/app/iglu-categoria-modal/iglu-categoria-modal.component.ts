import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CategoriaDataService } from '../categoria-data.service';
import { Categoria } from '../producto.model';

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

  private mode: MODE;
  private categorias: Categoria[];

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriaDataService: CategoriaDataService
  ) { }

  public ngOnInit(): void{
    this.mode = new MODE;
    this.categoriaDataService.getCategoria().subscribe(categorias => this.categorias = categorias);
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

  public dataSend(): void{
    const newCategoria: Categoria = {
      Nombre: "Kc Yo"
    } as Categoria;

    this.categoriaDataService.addCategoria(newCategoria).subscribe(categoria => this.categorias.push(categoria));
  }


}
