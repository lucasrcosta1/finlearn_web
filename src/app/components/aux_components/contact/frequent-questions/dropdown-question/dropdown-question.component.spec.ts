import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownQuestionComponent } from './dropdown-question.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('DropdownQuestionComponent', () => {
  let component: DropdownQuestionComponent;
  let fixture: ComponentFixture<DropdownQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownQuestionComponent ],
      imports: [MatSnackBarModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
