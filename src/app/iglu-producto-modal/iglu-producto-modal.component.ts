import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Producto } from '../producto.model';


@Component({
  selector: 'app-iglu-producto-modal',
  templateUrl: './iglu-producto-modal.component.html',
  styleUrls: ['./iglu-producto-modal.component.styl']
})
export class IgluProductoModalComponent implements OnInit {

  public hide: boolean = true;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  public ngOnInit(): void{
  }

  public getTitulo(): string{
    return this.data.titulo;
  }

}
