import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmallerScreenComponent } from './login-smaller-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginSmallerScreenComponent', () => {
  let component: LoginSmallerScreenComponent;
  let fixture: ComponentFixture<LoginSmallerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSmallerScreenComponent ],
      imports: [MatSnackBarModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSmallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
