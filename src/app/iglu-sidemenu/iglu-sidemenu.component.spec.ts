import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluSidemenuComponent } from './iglu-sidemenu.component';

describe('IgluSidemenuComponent', () => {
  let component: IgluSidemenuComponent;
  let fixture: ComponentFixture<IgluSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
