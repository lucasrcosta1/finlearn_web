import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should have a valid form when all fields are filled', () => {
    const form = component.contactForm;
    if (form) {
      form.setValue({
        name: 'test name',
        email: 'email@email.com',
        subject: 'test subject',
        description: 'test description'
      });
      expect(form.valid).toBeTruthy();
    }
  });

  it('it should show error messages for invalid inputs when submitting', () => {
    const nameControl = component.contactForm.get('name');
    const emailControl = component.contactForm.get('email');
    const subjectControl = component.contactForm.get('subject');
    const descriptionControl = component.contactForm.get('description');

    if (nameControl && emailControl && subjectControl && descriptionControl) {
      nameControl.setValue('');
      emailControl.setValue('invalidEmail');
      subjectControl.setValue('');
      descriptionControl.setValue('');
    }

    component.submit();

    const nameError = fixture.nativeElement.querySelector(
      '#name-error'
    );
    const emailError = fixture.nativeElement.querySelector(
      '#email-error'
    );
    const subjectError = fixture.nativeElement.querySelector(
      '#subject-error'
    );
    const descriptionError = fixture.nativeElement.querySelector(
      '#description-error'
    );

    expect(nameError.textContent).toContain('Digite um nome válido.');
    expect(emailError.textContent).toContain('Digite um email válido.');
    expect(subjectError.textContent).toContain('Digite um assunto válido.');
    expect(descriptionError.textContent).toContain('Digite uma descrição válida.');
  });

  it('it should call submit() method when the form is submitted', () => {
    spyOn(component, 'submit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.submit).toHaveBeenCalled();
  });

});
