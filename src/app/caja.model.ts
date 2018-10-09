export class Caja {
  Id_caja: number;
  Inicio: number;
  Fin: number;
  HoraInicio: string;
  HoraFin: string;
  CierreReal: number;
  CierreFiscal: number;

  constructor(id: number, inic: number, HoraInic: string, fin?: number, HoraFin?: string) {
    this.Id_caja = id;
    this.Inicio = inic;
    this.Fin = fin;
    this.HoraInicio = HoraInic;
    this.HoraFin = HoraFin;
  }
}
