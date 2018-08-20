import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluViewAdminComponent } from './iglu-view-admin.component';

describe('IgluViewAdminComponent', () => {
  let component: IgluViewAdminComponent;
  let fixture: ComponentFixture<IgluViewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluViewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
