export class Empleado {
  Id_empleado: number;
  Id_login: {};
  FechaBaja: {};
  FirstName: string;
  LastName: string;

  constructor(id: number, nombre: string, apellido: string) {
    this.Id_empleado = id;
    this.FirstName = nombre;
    this.LastName = apellido;
  }
}

export class EmpleadoActivo {
  active: boolean;
  Id_empleado: number;
}

export class Login {
  Id_login: number;
  Usuario: string;
  Password: string;
}
