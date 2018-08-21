import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluEmpleadoAdminComponent } from './iglu-empleado-admin.component';

describe('IgluEmpleadoAdminComponent', () => {
  let component: IgluEmpleadoAdminComponent;
  let fixture: ComponentFixture<IgluEmpleadoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluEmpleadoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluEmpleadoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
