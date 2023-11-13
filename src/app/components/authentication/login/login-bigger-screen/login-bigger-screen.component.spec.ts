import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBiggerScreenComponent } from './login-bigger-screen.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

describe('LoginBiggerScreenComponent', () => {
  let component: LoginBiggerScreenComponent;
  let fixture: ComponentFixture<LoginBiggerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBiggerScreenComponent ],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientModule],
      providers: [FormBuilder],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBiggerScreenComponent);
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
      '#loginBiggerScreenUsername-error'
    );
    const passwordError = fixture.nativeElement.querySelector(
      '#loginBiggerScreenPasswordDiv-error'
    );

    expect(usernameError.textContent).toContain('Digite um email válido.');
    expect(passwordError.textContent).toContain(
      'Digite uma senha válida.'
    );
  });

  it('should call submit() method when the form is submitted', () => {
    spyOn(component, 'submit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.submit).toHaveBeenCalled();
  });
});
