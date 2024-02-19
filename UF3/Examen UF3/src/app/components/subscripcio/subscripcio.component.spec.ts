import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscripcioComponent } from './subscripcio.component';

describe('SubscripcioComponent', () => {
  let component: SubscripcioComponent;
  let fixture: ComponentFixture<SubscripcioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscripcioComponent]
    });
    fixture = TestBed.createComponent(SubscripcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
