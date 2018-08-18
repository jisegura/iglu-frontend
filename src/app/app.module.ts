import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { MatMenuModule } from '@angular/material/menu';

import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { httpInterceptorProviders } from './http-interceptors/index';

import { IgluFacturaComponent } from './iglu-factura/iglu-factura.component';
import { IgluProductoComponent } from './iglu-producto/iglu-producto.component';
import { IgluPedidoComponent } from './iglu-pedido/iglu-pedido.component';
import { IgluConfirmarPedidoDialogComponent } from './iglu-confirmar-pedido-dialog/iglu-confirmar-pedido-dialog.component';
import { IgluTablaProductoComponent } from './iglu-tabla-producto/iglu-tabla-producto.component';
import { IgluSidemenuComponent } from './iglu-sidemenu/iglu-sidemenu.component';
import { IgluConfigmenuButtonsComponent } from './iglu-configmenu-buttons/iglu-configmenu-buttons.component';
import { IgluSidebarComponent } from './iglu-sidebar/iglu-sidebar.component';
import { IgluProductoModalComponent } from './iglu-producto-modal/iglu-producto-modal.component';
import { IgluCategoriaModalComponent } from './iglu-categoria-modal/iglu-categoria-modal.component';
import { IgluFacturaLastComponent } from './iglu-factura-last/iglu-factura-last.component';
import { IgluEmpleadoModalComponent } from './iglu-empleado-modal/iglu-empleado-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    IgluFacturaComponent,
    IgluProductoComponent,
    IgluPedidoComponent,
    IgluConfirmarPedidoDialogComponent,
    IgluTablaProductoComponent,
    IgluSidemenuComponent,
    IgluConfigmenuButtonsComponent,
    IgluSidebarComponent,
    IgluProductoModalComponent,
    IgluCategoriaModalComponent,
    IgluFacturaLastComponent,
    IgluEmpleadoModalComponent
  ],
  entryComponents: [
    IgluConfirmarPedidoDialogComponent,
    IgluProductoModalComponent,
    IgluCategoriaModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatRadioModule,
    MatMenuModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
