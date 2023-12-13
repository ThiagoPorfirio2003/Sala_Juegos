import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibicionEncuestasComponent } from './exhibicion-encuestas.component';

describe('ExhibicionEncuestasComponent', () => {
  let component: ExhibicionEncuestasComponent;
  let fixture: ComponentFixture<ExhibicionEncuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibicionEncuestasComponent]
    });
    fixture = TestBed.createComponent(ExhibicionEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
