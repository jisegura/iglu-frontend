import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluLastFacturaModalComponent } from './iglu-last-factura-modal.component';

describe('IgluLastFacturaModalComponent', () => {
  let component: IgluLastFacturaModalComponent;
  let fixture: ComponentFixture<IgluLastFacturaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluLastFacturaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluLastFacturaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
