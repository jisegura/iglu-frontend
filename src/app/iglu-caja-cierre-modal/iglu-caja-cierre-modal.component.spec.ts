import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaCierreModalComponent } from './iglu-caja-cierre-modal.component';

describe('IgluCajaCierreModalComponent', () => {
  let component: IgluCajaCierreModalComponent;
  let fixture: ComponentFixture<IgluCajaCierreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaCierreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaCierreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
