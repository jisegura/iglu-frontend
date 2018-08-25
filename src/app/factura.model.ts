export class Factura {
  Id_factura: number;
  Id_caja: number;
  Id_empleado: {
    Int64: number,
    Valid: boolean
  };
  Fecha: string;
  Precio: number;
  ComentarioBaja: string;
  Descuento: {
    Int64: number,
    Valid: boolean
  };
  FormaDePago: {
    Int64: number,
    Valid: boolean
  };
  Renglones: Renglon[];
  Comentario: {
    String: string,
    Valid: boolean
  }
}

export class Renglon {
  Id_renglon: number;
  Id_producto: {
    Int64: number,
    Valid: boolean
  };
  Id_factura: number;
  Cantidad: number;
  Precio: number;
  Descuento: number;
}

export class FacturaByIdCaja {
	Id_factura: number;
}

export class Retiros extends Factura {

}

export class Otros extends Factura {

}

export class Clientes extends Factura {

}

export class FacturaGeneral extends Factura {

}
