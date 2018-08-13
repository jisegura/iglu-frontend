import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluProductoComponent } from './iglu-producto.component';

describe('IgluProductoComponent', () => {
  let component: IgluProductoComponent;
  let fixture: ComponentFixture<IgluProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
