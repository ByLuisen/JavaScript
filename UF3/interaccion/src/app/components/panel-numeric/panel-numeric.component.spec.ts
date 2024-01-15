import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNumericComponent } from './panel-numeric.component';

describe('PanelNumericComponent', () => {
  let component: PanelNumericComponent;
  let fixture: ComponentFixture<PanelNumericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelNumericComponent]
    });
    fixture = TestBed.createComponent(PanelNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
