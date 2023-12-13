import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activateEstaLogueadoGuard } from './activate-esta-logueado.guard';

describe('activateEstaLogueadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activateEstaLogueadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
