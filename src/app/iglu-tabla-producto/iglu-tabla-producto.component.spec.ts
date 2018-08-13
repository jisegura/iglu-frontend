import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluTablaProductoComponent } from './iglu-tabla-producto.component';

describe('IgluTablaProductoComponent', () => {
  let component: IgluTablaProductoComponent;
  let fixture: ComponentFixture<IgluTablaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluTablaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluTablaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
