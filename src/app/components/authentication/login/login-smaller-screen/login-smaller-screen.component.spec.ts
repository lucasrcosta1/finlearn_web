import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmallerScreenComponent } from './login-smaller-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('LoginSmallerScreenComponent', () => {
  let component: LoginSmallerScreenComponent;
  let fixture: ComponentFixture<LoginSmallerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSmallerScreenComponent ],
      imports: [ReactiveFormsModule, MatSnackBarModule],
      providers: [FormBuilder],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSmallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the loginForm with null values', () => {
    expect(component.loginForm.value).toEqual({ username: null, password: null });
  });

  it('should show error messages for invalid inputs when submitting', () => {
    const usernameControl = component.loginForm.get('username');
    const passwordControl = component.loginForm.get('password');

    if (usernameControl && passwordControl) {
      usernameControl.setValue('invalidemail');
      passwordControl.setValue('pass');
    }

    component.submit();

    const usernameError = fixture.nativeElement.querySelector(
      '#loginSmallerScreenUsername-error'
    );
    const passwordError = fixture.nativeElement.querySelector(
      '#loginSmallerScreenPasswordDiv-error'
    );

    expect(usernameError.textContent).toContain('Digite um email válido.');
    expect(passwordError.textContent).toContain(
      'Digite uma senha com pelo menos 6 caracteres.'
    );
  });

  it('should call submit() method when the form is submitted', () => {
    spyOn(component, 'submit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.submit).toHaveBeenCalled();
  });
});
