import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaStatusComponent } from './iglu-caja-status.component';

describe('IgluCajaStatusComponent', () => {
  let component: IgluCajaStatusComponent;
  let fixture: ComponentFixture<IgluCajaStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
