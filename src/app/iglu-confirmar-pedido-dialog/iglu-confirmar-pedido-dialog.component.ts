import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Pedido } from '../pedido.model';


@Component({
  selector: 'app-iglu-confirmar-pedido-dialog',
  templateUrl: './iglu-confirmar-pedido-dialog.component.html',
  styleUrls: ['./iglu-confirmar-pedido-dialog.component.styl']
})
export class IgluConfirmarPedidoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  getNumeroPedido(): number{
    return this.data.pedido.numero;
  }

}
