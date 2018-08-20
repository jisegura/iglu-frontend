import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCajaModalComponent } from './iglu-caja-modal.component';

describe('IgluCajaModalComponent', () => {
  let component: IgluCajaModalComponent;
  let fixture: ComponentFixture<IgluCajaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCajaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCajaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
