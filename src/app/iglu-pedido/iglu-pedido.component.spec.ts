import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluPedidoComponent } from './iglu-pedido.component';

describe('IgluPedidoComponent', () => {
  let component: IgluPedidoComponent;
  let fixture: ComponentFixture<IgluPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
