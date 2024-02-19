import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacioComponent } from './identificacio.component';

describe('IdentificacioComponent', () => {
  let component: IdentificacioComponent;
  let fixture: ComponentFixture<IdentificacioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificacioComponent]
    });
    fixture = TestBed.createComponent(IdentificacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
