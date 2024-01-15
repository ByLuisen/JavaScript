import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoComponent } from './dado.component';

describe('DadoComponent', () => {
  let component: DadoComponent;
  let fixture: ComponentFixture<DadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadoComponent]
    });
    fixture = TestBed.createComponent(DadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
