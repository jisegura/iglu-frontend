import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaAbrirModalComponent } from './iglu-caja-abrir-modal.component';

describe('IgluCajaAbrirModalComponent', () => {
  let component: IgluCajaAbrirModalComponent;
  let fixture: ComponentFixture<IgluCajaAbrirModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaAbrirModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaAbrirModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
