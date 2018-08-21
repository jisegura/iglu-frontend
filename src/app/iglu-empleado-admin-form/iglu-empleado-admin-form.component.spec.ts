import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluEmpleadoAdminFormComponent } from './iglu-empleado-admin-form.component';

describe('IgluEmpleadoAdminFormComponent', () => {
  let component: IgluEmpleadoAdminFormComponent;
  let fixture: ComponentFixture<IgluEmpleadoAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluEmpleadoAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluEmpleadoAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
