import { Component, OnInit } from '@angular/core';
import { CajaDataService } from '../caja-data.service';
import { Caja } from '../caja.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iglu-caja-status',
  templateUrl: './iglu-caja-status.component.html',
  styleUrls: ['./iglu-caja-status.component.styl']
})
export class IgluCajaStatusComponent implements OnInit {

  public cajaOpen: Observable<Caja>;

  constructor(
  	private cadaDataService: CajaDataService
  ) { }

  ngOnInit() {
    this.cajaOpen = this.cadaDataService.cajaOpen;
    this.cadaDataService.loadCajaOpen();
  }

  public haveCajaOpen(): boolean{
    return true;
  }

}
