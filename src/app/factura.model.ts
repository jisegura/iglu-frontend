export class Factura {
  Id_factura: number;
  Id_caja: number;
  Id_empleado: number;
  Fecha: string;
  Precio: number;
  ComentarioBaja: string;
}

export class Renglon {
  Id_renglon: number;
  Id_producto: number;
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
	Comentario: {
    String: string,
    Valid: boolean
  }
}

export class Clientes extends Factura {
  Descuento: {
    Int64: number,
    Valid: boolean
  };
  FormaDePago: {
    Int64: number,
    Valid: boolean
  };
  Renglones: Renglon[];
}

export class FacturaGeneral extends Clientes {
  Comentario: {
    String: string,
    Valid: boolean
  }
}
