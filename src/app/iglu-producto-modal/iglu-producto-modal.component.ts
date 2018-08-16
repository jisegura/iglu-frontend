import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
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
  private mode: MODE;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void{
    this.mode = new MODE;
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

}
