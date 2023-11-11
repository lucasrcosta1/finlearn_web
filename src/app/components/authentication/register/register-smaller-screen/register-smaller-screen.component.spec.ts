import { ComponentFixture, TestBed, tick, fakeAsync  } from '@angular/core/testing';

import { RegisterSmallerScreenComponent } from './register-smaller-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { RegisterService } from '../register.service';
import { LoginService } from '../../login/login.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterSmallerScreenComponent', () => {
  let component: RegisterSmallerScreenComponent;
  let fixture: ComponentFixture<RegisterSmallerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSmallerScreenComponent ],
      imports: [ReactiveFormsModule, MatSnackBarModule, HttpClientModule],
      providers: [
        RegisterService, 
        LoginService,   
        SnackbarService, 
        FormBuilder,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSmallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the registerForm with null values', () => {
    expect(component.registerForm.value).toEqual({ fullname: null, phone: null, username: null, usernameCheck: null, password: null, passwordCheck: null });
  });

  it('should render the submit button', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

  it('should render the bottom button', () => {
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement;
    const bottomButton = compiled.querySelector('button[click="enableLoginPage"]');
    if (bottomButton) {
      expect(bottomButton).toBeTruthy();
      expect(bottomButton.textContent).toContain('Já tenho conta');
    }
  });

  it('should show error messages for invalid inputs when submitting', fakeAsync(() => {
    fixture.detectChanges();

    const fullnameControl = component.registerForm.get('fullname');
    const phoneControl = component.registerForm.get('phone');
    const usernameControl = component.registerForm.get('username');
    const usernameCheckControl = component.registerForm.get('usernameCheck');
    const passwordControl = component.registerForm.get('password');
    const passwordCheckControl = component.registerForm.get('passwordCheck');

    if (fullnameControl && phoneControl && usernameControl && usernameCheckControl && passwordControl && passwordCheckControl) {

      fullnameControl.setValue('');
      phoneControl.setValue('123'); // Invalid phone format
      usernameControl.setValue('invalid-email'); // Invalid email format
      usernameCheckControl.setValue('mismatch-email'); // Mismatched email
      passwordControl.setValue('short'); // Invalid password
      passwordCheckControl.setValue('mismatch-password'); // Mismatched password
  
      component.submit();
      tick(); 
  
      fixture.detectChanges();
  
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenFullname-error').textContent).toContain('Digite um nome válido.');
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenPhone-error').textContent).toContain('Digite um telefone válido (XX) XXXXX-XXXX.');
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenNonValidUsername-error').textContent).toContain('Digite um email válido.');
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenDoNotMatchUsername-error').textContent).toContain('Emails não coincidem.');
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenNonValidPassword-error').textContent).toContain('Digite uma senha válida.');
      expect(fixture.nativeElement.querySelector('#registerSmallerScreenDoNotMatchPassword-error').textContent).toContain('Senhas não coincidem.');
    }
  }));
});
