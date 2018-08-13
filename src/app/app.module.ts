import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

//import { ProductoDataService } from './producto-data.service';

import { IgluFacturaComponent } from './iglu-factura/iglu-factura.component';
import { IgluProductoComponent } from './iglu-producto/iglu-producto.component';
import { IgluPedidoComponent } from './iglu-pedido/iglu-pedido.component';
import { IgluConfirmarPedidoDialogComponent } from './iglu-confirmar-pedido-dialog/iglu-confirmar-pedido-dialog.component';
import { IgluTablaProductoComponent } from './iglu-tabla-producto/iglu-tabla-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    IgluFacturaComponent,
    IgluProductoComponent,
    IgluPedidoComponent,
    IgluConfirmarPedidoDialogComponent,
    IgluTablaProductoComponent
  ],
  entryComponents: [IgluConfirmarPedidoDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
