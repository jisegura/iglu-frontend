import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluConfirmarPedidoDialogComponent } from './iglu-confirmar-pedido-dialog.component';

describe('IgluConfirmarPedidoDialogComponent', () => {
  let component: IgluConfirmarPedidoDialogComponent;
  let fixture: ComponentFixture<IgluConfirmarPedidoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluConfirmarPedidoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluConfirmarPedidoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
