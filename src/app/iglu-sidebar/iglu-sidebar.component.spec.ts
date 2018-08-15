import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluSidebarComponent } from './iglu-sidebar.component';

describe('IgluSidebarComponent', () => {
  let component: IgluSidebarComponent;
  let fixture: ComponentFixture<IgluSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
