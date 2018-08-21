export class Producto {
  Id_producto: number;
  Id_categoria: number;
  Nombre: string;
  Precio: number;
  Imagen: string;

  constructor(id_p: number, id_c: number, nombre: string, precio: number) {
    this.Id_producto = id_p;
    this.Id_categoria = id_c;
    this.Nombre = nombre;
    this.Precio = precio;
    this.Imagen = "img";
  }
}

export class Categoria {
	Id_categoria: number;
	Nombre: string;

  constructor(id: number, nombre: string) {
    this.Id_categoria = id;
    this.Nombre = nombre;
  }
}

export class TablaProducto {
  cant: number;
  image: string;
}

export class Factura {
  Id_factura
  Id_caja
  Id_empleado
  Fecha
  Precio
  Comentario
}

export class Renglon {
  Id_renglon
  Id_facrura
  Id_producto
  Cantidad
  Precio
  Descuento
}
