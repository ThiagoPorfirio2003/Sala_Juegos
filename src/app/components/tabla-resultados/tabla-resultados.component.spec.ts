import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResultadosComponent } from './tabla-resultados.component';

describe('TablaResultadosComponent', () => {
  let component: TablaResultadosComponent;
  let fixture: ComponentFixture<TablaResultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaResultadosComponent]
    });
    fixture = TestBed.createComponent(TablaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
