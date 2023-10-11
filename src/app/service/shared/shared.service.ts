import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  /**
   * Name match pattern.
   * @param name 
   * @returns 
   */
  isNameValid (name: string | null): boolean {

    return (name && name.length >= 3 && name.length <= 50) ? true : false ;

  }

  /**
   * Phone match pattern.
   * @param phone 
   * @returns 
   */
  isPhoneValid (phone: string | null): boolean {

    return (phone && phone.length == 14) ? true : false ;

  }

  /**
   * Username match login pattern.
   * @param username 
   * @returns 
   */
  usernameMatchPattern (username: string | null): boolean {

    if (username && username != "" && this.usernameIsAnEmail(username)) return true;
    return false;

  }

  /**
   * Password match login pattern.
   * @param password 
   * @returns 
   */
  passwordMatchPattern (password: string | null): boolean {

    return (password && password.length >= 6) ? true : false ;

  }

  /**
   * Check whether an username is an email or not.
   * @param username 
   * @returns 
   */
  usernameIsAnEmail (username: string): boolean {

    return username.includes("@") && (username.includes(".com") || username.includes(".org"));

  }

  /**
   * Set field in error by given id.
   * @param fieldName
   */
  markFieldError (fieldName: string): void {

    const fieldDiv = document.getElementById(fieldName);
    if (fieldDiv) {

      fieldDiv.style.border = "1px solid red";

    }

  }

  /**
   * Set field out from error by a given id.
   * @param fieldName
   */
  removeFieldError (fieldName: string): void {

    const fieldDiv = document.getElementById(fieldName);
    if (fieldDiv) {

      fieldDiv.style.border = "1px solid black";

    }

  }

  /**
   * Show error message.
   * @param spanIdName 
   */
  showErrorMessage (spanIdName: string): void {

    const span = document.getElementById(spanIdName);
    if (span) {

      span.style.display = "block";

    }

  }

  /**
   * Hide error message.
   * @param spanIdName 
   */
  hideErrorMessage (spanIdName: string): void {

    const span = document.getElementById(spanIdName);
    if (span) {

      span.style.display = "none";

    }

  }
}
