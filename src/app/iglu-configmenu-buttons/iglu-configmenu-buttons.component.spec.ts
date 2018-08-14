import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluConfigmenuButtonsComponent } from './iglu-configmenu-buttons.component';

describe('IgluConfigmenuButtonsComponent', () => {
  let component: IgluConfigmenuButtonsComponent;
  let fixture: ComponentFixture<IgluConfigmenuButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluConfigmenuButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluConfigmenuButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
