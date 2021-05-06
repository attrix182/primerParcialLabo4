import { TestBed } from '@angular/core/testing';

import { UsuariofireService } from './usuariofire.service';

describe('UsuariofireService', () => {
  let service: UsuariofireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariofireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
