import { TestBed } from '@angular/core/testing';

import { NotasCrudService } from './notas.crud.service';

describe('NotasCrudService', () => {
  let service: NotasCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
