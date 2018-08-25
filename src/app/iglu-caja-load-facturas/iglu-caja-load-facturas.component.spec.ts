import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaLoadFacturasComponent } from './iglu-caja-load-facturas.component';

describe('IgluCajaLoadFacturasComponent', () => {
  let component: IgluCajaLoadFacturasComponent;
  let fixture: ComponentFixture<IgluCajaLoadFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaLoadFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaLoadFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
