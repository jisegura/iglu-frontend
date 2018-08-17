import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluCategoriaModalComponent } from './iglu-categoria-modal.component';

describe('IgluCategoriaModalComponent', () => {
  let component: IgluCategoriaModalComponent;
  let fixture: ComponentFixture<IgluCategoriaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluCategoriaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluCategoriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
