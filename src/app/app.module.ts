import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
import { IgluFacturaLastComponent } from './iglu-factura-last/iglu-factura-last.component';
import { IgluEmpleadoListComponent } from './iglu-empleado-list/iglu-empleado-list.component';
import { IgluCajaModalComponent } from './iglu-caja-modal/iglu-caja-modal.component';
import { IgluViewAdminComponent } from './iglu-view-admin/iglu-view-admin.component';
import { IgluCajaStatusComponent } from './iglu-caja-status/iglu-caja-status.component';
import { IgluViewClienteComponent } from './iglu-view-cliente/iglu-view-cliente.component';
import { IgluCategoriaAdminComponent } from './iglu-categoria-admin/iglu-categoria-admin.component';
import { IgluProductoAdminComponent } from './iglu-producto-admin/iglu-producto-admin.component';
import { IgluEmpleadoAdminComponent } from './iglu-empleado-admin/iglu-empleado-admin.component';
import { IgluEmpleadoAdminFormComponent } from './iglu-empleado-admin-form/iglu-empleado-admin-form.component';
import { IgluProductoAdminFormComponent } from './iglu-producto-admin-form/iglu-producto-admin-form.component';
import { IgluCategoriaAdminFormComponent } from './iglu-categoria-admin-form/iglu-categoria-admin-form.component';
import { IgluCajaAdminComponent } from './iglu-caja-admin/iglu-caja-admin.component';
import { IgluRetidosModalComponent } from './iglu-retidos-modal/iglu-retidos-modal.component';
import { IgluOtrosModalComponent } from './iglu-otros-modal/iglu-otros-modal.component';
import { IgluCajaLoadFacturasComponent } from './iglu-caja-load-facturas/iglu-caja-load-facturas.component';
import { IgluCajaCierreModalComponent } from './iglu-caja-cierre-modal/iglu-caja-cierre-modal.component';
import { IgluCajaAbrirModalComponent } from './iglu-caja-abrir-modal/iglu-caja-abrir-modal.component';
import { IgluLastFacturaModalComponent } from './iglu-last-factura-modal/iglu-last-factura-modal.component';
import { IgluExcelExportModalComponent } from './iglu-excel-export-modal/iglu-excel-export-modal.component';

registerLocaleData(localeEsAr);

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
    IgluFacturaLastComponent,
    IgluEmpleadoListComponent,
    IgluCajaModalComponent,
    IgluViewAdminComponent,
    IgluCajaStatusComponent,
    IgluViewClienteComponent,
    IgluCategoriaAdminComponent,
    IgluProductoAdminComponent,
    IgluEmpleadoAdminComponent,
    IgluEmpleadoAdminFormComponent,
    IgluProductoAdminFormComponent,
    IgluCategoriaAdminFormComponent,
    IgluCajaAdminComponent,
    IgluRetidosModalComponent,
    IgluOtrosModalComponent,
    IgluCajaLoadFacturasComponent,
    IgluCajaCierreModalComponent,
    IgluCajaAbrirModalComponent,
    IgluLastFacturaModalComponent,
    IgluExcelExportModalComponent
  ],
  entryComponents: [
    IgluConfirmarPedidoDialogComponent,
    IgluCajaModalComponent,
    IgluRetidosModalComponent,
    IgluOtrosModalComponent,
    IgluCajaCierreModalComponent,
    IgluCajaAbrirModalComponent,
    IgluLastFacturaModalComponent,
    IgluExcelExportModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    httpInterceptorProviders,
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: "es-AR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
