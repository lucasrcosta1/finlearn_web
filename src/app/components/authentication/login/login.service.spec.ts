import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
