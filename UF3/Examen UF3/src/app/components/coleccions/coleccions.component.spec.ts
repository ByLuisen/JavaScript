import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionsComponent } from './coleccions.component';

describe('ColeccionsComponent', () => {
  let component: ColeccionsComponent;
  let fixture: ComponentFixture<ColeccionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColeccionsComponent]
    });
    fixture = TestBed.createComponent(ColeccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
