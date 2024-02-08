import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipComponent } from './equip.component';

describe('EquipComponent', () => {
  let component: EquipComponent;
  let fixture: ComponentFixture<EquipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipComponent]
    });
    fixture = TestBed.createComponent(EquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
