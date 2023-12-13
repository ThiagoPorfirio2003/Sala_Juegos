import { TestBed } from '@angular/core/testing';

import { ConsumoApiGitService } from './consumo-api-git.service';

describe('ConsumoApiGitService', () => {
  let service: ConsumoApiGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
