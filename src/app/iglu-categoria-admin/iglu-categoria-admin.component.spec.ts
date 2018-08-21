import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCategoriaAdminComponent } from './iglu-categoria-admin.component';

describe('IgluCategoriaAdminComponent', () => {
  let component: IgluCategoriaAdminComponent;
  let fixture: ComponentFixture<IgluCategoriaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCategoriaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
