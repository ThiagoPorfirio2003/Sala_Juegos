import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEncuestaComponent } from './ingreso-encuesta.component';

describe('IngresoEncuestaComponent', () => {
  let component: IngresoEncuestaComponent;
  let fixture: ComponentFixture<IngresoEncuestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoEncuestaComponent]
    });
    fixture = TestBed.createComponent(IngresoEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
