import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';


describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
