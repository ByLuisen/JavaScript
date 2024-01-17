import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCronometroComponent } from './prueba-cronometro.component';

describe('PruebaCronometroComponent', () => {
  let component: PruebaCronometroComponent;
  let fixture: ComponentFixture<PruebaCronometroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaCronometroComponent]
    });
    fixture = TestBed.createComponent(PruebaCronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
