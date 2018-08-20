import { Component, OnInit } from '@angular/core';
import { ViewsService, VistaActive } from '../views.service';


@Component({
  selector: 'app-iglu-caja-modal',
  templateUrl: './iglu-caja-modal.component.html',
  styleUrls: ['./iglu-caja-modal.component.styl']
})
export class IgluCajaModalComponent implements OnInit {

  public hide: boolean = true;
  public isDisabled: boolean;
  public viewActive: VistaActive;

  private pwInputComplete: boolean;
  private pw: string = "pw";


  constructor(
    private viewsService: ViewsService
  ) { }

  ngOnInit() {
    this.isDisabled = true;
    this.pwInputComplete = false;
    this.viewsService
      .getVistaActive()
      .subscribe(viewActive => this.viewActive = viewActive);
  }

  public onPassInput($event): void{
    if ($event.target.value === this.pw) {
      this.pwInputComplete = true;
    } else {
      this.pwInputComplete = false;
    }
    this.validButtonEnviar();
  }

  private validButtonEnviar(): void{
    if (this.pwInputComplete) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  public dataSend(): void{
    this.viewActive.active = "ADMIN";
  }

}
