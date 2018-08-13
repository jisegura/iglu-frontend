import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluFacturaComponent } from './iglu-factura.component';

describe('IgluFacturaComponent', () => {
  let component: IgluFacturaComponent;
  let fixture: ComponentFixture<IgluFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
