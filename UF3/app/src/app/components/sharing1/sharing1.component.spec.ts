import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharing1Component } from './sharing1.component';

describe('Sharing1Component', () => {
  let component: Sharing1Component;
  let fixture: ComponentFixture<Sharing1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sharing1Component]
    });
    fixture = TestBed.createComponent(Sharing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
