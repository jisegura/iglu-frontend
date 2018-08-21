import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCategoriaAdminFormComponent } from './iglu-categoria-admin-form.component';

describe('IgluCategoriaAdminFormComponent', () => {
  let component: IgluCategoriaAdminFormComponent;
  let fixture: ComponentFixture<IgluCategoriaAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCategoriaAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCategoriaAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
