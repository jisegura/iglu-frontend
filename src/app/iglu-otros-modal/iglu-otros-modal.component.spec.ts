import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluOtrosModalComponent } from './iglu-otros-modal.component';

describe('IgluOtrosModalComponent', () => {
  let component: IgluOtrosModalComponent;
  let fixture: ComponentFixture<IgluOtrosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluOtrosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluOtrosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
