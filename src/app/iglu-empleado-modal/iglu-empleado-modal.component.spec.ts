import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluEmpleadoModalComponent } from './iglu-empleado-modal.component';

describe('IgluEmpleadoModalComponent', () => {
  let component: IgluEmpleadoModalComponent;
  let fixture: ComponentFixture<IgluEmpleadoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluEmpleadoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluEmpleadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
