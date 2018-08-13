class ProductoPedido {
  id: number;
  cant: number;
  desc: number;
}

export class Pedido {
  active: boolean;
  numero: number;
  productos: ProductoPedido[];
  desc_total: number = 0;
  total: number;
}
