import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharing2Component } from './sharing2.component';

describe('Sharing2Component', () => {
  let component: Sharing2Component;
  let fixture: ComponentFixture<Sharing2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sharing2Component]
    });
    fixture = TestBed.createComponent(Sharing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
