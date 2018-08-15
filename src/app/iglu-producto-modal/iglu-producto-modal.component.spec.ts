import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluProductoModalComponent } from './iglu-producto-modal.component';

describe('IgluProductoModalComponent', () => {
  let component: IgluProductoModalComponent;
  let fixture: ComponentFixture<IgluProductoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluProductoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluProductoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
