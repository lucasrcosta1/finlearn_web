import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', "../../../../styles.css"]
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
    private _snackbarService: SnackbarService,
    private _sharedService: SharedService,
  ) {

    this.contactForm = this._createForm(this._formBuilder);

  }

  /**
   * Handle form submission.
   */
  submit (): void {

    const name = this.contactForm.value.name, email = this.contactForm.value.email, subject = this.contactForm.value.subject, description = this.contactForm.value.description;
    if (this._checkContactFieldsAreCorrectlyFilled("name", "email", "subject", "description", name, email, subject, description)) {
      
      const contactInfo = {name: name, email: email, subject: subject, description: description};
      // this._apiService.post("/contact", contactInfo);
      this._snackbarService.openSnackBar(10,"Logo responderemos seu contato. Fique de olho no seu email!")


    }

  }

  /**
   * Create form.
   * @param formBuilder 
   * @returns 
   */
  private _createForm (formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({
      name        : [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email       : [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
      subject     : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description : [null, [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    });

  }

  private _checkContactFieldsAreCorrectlyFilled (nameId: string, emailId: string, subjectId: string, descriptionId: string, name: string, email: string, subject: string, description: string): boolean {

    let isNameFieldOk = false, isEmailFieldOk = false, isSubjectFieldOk = false, isDescriptionFieldOk = false;
    if (this._sharedService.isNameValid(name)){
      
      this._sharedService.removeFieldError(nameId);
      this._sharedService.hideErrorMessage(nameId+"-error");
      isNameFieldOk = true;

    } else {

      this._sharedService.markFieldError(nameId);
      this._sharedService.showErrorMessage(nameId+"-error");

    }
    
    if (this._sharedService.usernameMatchPattern(email)){
      
      this._sharedService.removeFieldError(emailId);
      this._sharedService.hideErrorMessage(emailId+"-error");
      isEmailFieldOk = true;

    } else {

      this._sharedService.markFieldError(emailId);
      this._sharedService.showErrorMessage(emailId+"-error");

    }
    
    if (subject && subject.length >= 5 && subject.length <= 50){
      
      this._sharedService.removeFieldError(subjectId);
      this._sharedService.hideErrorMessage(subjectId+"-error");
      isSubjectFieldOk = true;

    } else {

      this._sharedService.markFieldError(subjectId);
      this._sharedService.showErrorMessage(subjectId+"-error");

    }

    if (description && description.length >= 10 && description.length <= 500){
      
      this._sharedService.removeFieldError(descriptionId);
      this._sharedService.hideErrorMessage(descriptionId+"-error");
      isDescriptionFieldOk = true;

    } else {

      this._sharedService.markFieldError(descriptionId);
      this._sharedService.showErrorMessage(descriptionId+"-error");

    }

    return isNameFieldOk && isEmailFieldOk && isSubjectFieldOk && isDescriptionFieldOk;

  }
  

}
