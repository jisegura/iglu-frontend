import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IgluCajaModalComponent } from '../iglu-caja-modal/iglu-caja-modal.component';




@Component({
  selector: 'app-iglu-sidebar',
  templateUrl: './iglu-sidebar.component.html',
  styleUrls: ['./iglu-sidebar.component.styl']
})
export class IgluSidebarComponent implements OnInit {

  public constructor(
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void{ }

  public openModalCaja(): void{
    const dialogRef = this.dialog.open(IgluCajaModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
