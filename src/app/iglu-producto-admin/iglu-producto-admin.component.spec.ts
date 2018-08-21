import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluProductoAdminComponent } from './iglu-producto-admin.component';

describe('IgluProductoAdminComponent', () => {
  let component: IgluProductoAdminComponent;
  let fixture: ComponentFixture<IgluProductoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluProductoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
