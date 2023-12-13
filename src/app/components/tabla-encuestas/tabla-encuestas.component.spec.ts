import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEncuestasComponent } from './tabla-encuestas.component';

describe('TablaEncuestasComponent', () => {
  let component: TablaEncuestasComponent;
  let fixture: ComponentFixture<TablaEncuestasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEncuestasComponent]
    });
    fixture = TestBed.createComponent(TablaEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
