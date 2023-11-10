import { TestBed } from '@angular/core/testing';

import { LearnService } from './learn.service';
import { HttpClientModule } from '@angular/common/http';

describe('LearnService', () => {
  let service: LearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
