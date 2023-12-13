import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERROR404Component } from './error404.component';

describe('ERROR404Component', () => {
  let component: ERROR404Component;
  let fixture: ComponentFixture<ERROR404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ERROR404Component]
    });
    fixture = TestBed.createComponent(ERROR404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
