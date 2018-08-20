import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluEmpleadoListComponent } from './iglu-empleado-list.component';

describe('IgluEmpleadoListComponent', () => {
  let component: IgluEmpleadoListComponent;
  let fixture: ComponentFixture<IgluEmpleadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluEmpleadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluEmpleadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
