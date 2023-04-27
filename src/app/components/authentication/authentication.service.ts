import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  /**
   * Returns error once email is not valid.
   * @returns
   */
  getEmailMessage (email: FormControl): string {
    if (email.hasError('required')) {
      return 'Insira um email válido';
    }

    return email.hasError('email') ? 'Email não é válido' : '';
  }

  /**
   * Returns error once password is not valid.
   * @returns
   */
  getPasswordMessage (password: FormControl): string {
    if (password.errors?.['minlength']) {
      return 'A senha deve ter no mínimo 8 caracteres';
    } else if (password.errors?.['required']) {
      return 'Insira uma senha válida';
    }

    return password.hasError('password') ? 'Senha não é valida.' : '';
  }
}
