import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaAdminComponent } from './iglu-caja-admin.component';

describe('IgluCajaAdminComponent', () => {
  let component: IgluCajaAdminComponent;
  let fixture: ComponentFixture<IgluCajaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
