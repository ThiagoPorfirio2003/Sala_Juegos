import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosUnaPalabraComponent } from './fotos-una-palabra.component';

describe('FotosUnaPalabraComponent', () => {
  let component: FotosUnaPalabraComponent;
  let fixture: ComponentFixture<FotosUnaPalabraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosUnaPalabraComponent]
    });
    fixture = TestBed.createComponent(FotosUnaPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
