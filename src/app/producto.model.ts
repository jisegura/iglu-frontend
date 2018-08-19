export class Producto {
  Id_producto: number;
  Id_categoria: number;
  Nombre: string;
  Precio: number;
  Imagen: string;
}

export class Categoria {
	Id_categoria: number;
	Nombre: string;
}

export class TablaProducto {
  cant: number;
  image: string;
}

export class Empleado {
  Id_empleado
  FirstName
  LastName
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

export class Caja {
  Id_caja
  Inicio
  Fin
  HoraInicio
  HoraFin
}