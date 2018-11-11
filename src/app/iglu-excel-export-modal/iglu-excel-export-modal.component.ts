import { Component, OnInit } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';

@Component({
  selector: 'app-iglu-excel-export-modal',
  templateUrl: './iglu-excel-export-modal.component.html',
  styleUrls: ['./iglu-excel-export-modal.component.styl']
})
export class IgluExcelExportModalComponent implements OnInit {

  //TODO
  private dateStart: number = 0;
  private dateEnd: number = 0;
  private isDisabled: boolean = true;
  // EXCEL

  constructor(
    private cajaDataService: CajaDataService
  ) { }

  ngOnInit() {
  }

  public dateEndChange(value): void {
    this.dateEnd = Math.floor(new Date(value).getTime()/1000);
    this.validateButton();
  }

  public dateStartChange(value): void {
    this.dateStart = Math.floor(new Date(value).getTime()/1000);
    this.validateButton();
  }

  private validateButton(): void{
    this.isDisabled = (this.dateStart === 0) || (this.dateEnd === 0);
  }

  public dataSend(): void{
    this.cajaDataService.exportExcel(this.dateStart, this.dateEnd);
  }

}
