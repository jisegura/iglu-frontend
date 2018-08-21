import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluProductoAdminFormComponent } from './iglu-producto-admin-form.component';

describe('IgluProductoAdminFormComponent', () => {
  let component: IgluProductoAdminFormComponent;
  let fixture: ComponentFixture<IgluProductoAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluProductoAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluProductoAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
