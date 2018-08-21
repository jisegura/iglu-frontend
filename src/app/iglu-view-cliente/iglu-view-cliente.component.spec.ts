import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluViewClienteComponent } from './iglu-view-cliente.component';

describe('IgluViewClienteComponent', () => {
  let component: IgluViewClienteComponent;
  let fixture: ComponentFixture<IgluViewClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluViewClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluViewClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
