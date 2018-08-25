import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iglu-caja-abrir-modal',
  templateUrl: './iglu-caja-abrir-modal.component.html',
  styleUrls: ['./iglu-caja-abrir-modal.component.styl']
})
export class IgluCajaAbrirModalComponent implements OnInit {

  public inicio: number;
  public isDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.isDisabled = true;
  }

  public onInicioInput(): void {
    if (this.inicio > 0) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}
