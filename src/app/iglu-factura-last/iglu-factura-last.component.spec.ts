import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluFacturaLastComponent } from './iglu-factura-last.component';

describe('IgluFacturaLastComponent', () => {
  let component: IgluFacturaLastComponent;
  let fixture: ComponentFixture<IgluFacturaLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluFacturaLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluFacturaLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
