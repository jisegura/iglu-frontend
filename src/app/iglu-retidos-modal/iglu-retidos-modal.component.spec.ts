import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluRetidosModalComponent } from './iglu-retidos-modal.component';

describe('IgluRetidosModalComponent', () => {
  let component: IgluRetidosModalComponent;
  let fixture: ComponentFixture<IgluRetidosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluRetidosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluRetidosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
