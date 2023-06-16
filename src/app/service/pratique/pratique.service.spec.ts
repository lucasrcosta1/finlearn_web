import { TestBed } from '@angular/core/testing';

import { PratiqueService } from './pratique.service';

describe('PratiqueService', () => {
  let service: PratiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PratiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
