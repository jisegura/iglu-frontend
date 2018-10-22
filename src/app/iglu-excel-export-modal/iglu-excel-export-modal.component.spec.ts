import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgluExcelExportModalComponent } from './iglu-excel-export-modal.component';

describe('IgluExcelExportModalComponent', () => {
  let component: IgluExcelExportModalComponent;
  let fixture: ComponentFixture<IgluExcelExportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgluExcelExportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgluExcelExportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
