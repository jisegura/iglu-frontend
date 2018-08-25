import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-iglu-caja-cierre-modal',
  templateUrl: './iglu-caja-cierre-modal.component.html',
  styleUrls: ['./iglu-caja-cierre-modal.component.styl']
})
export class IgluCajaCierreModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
