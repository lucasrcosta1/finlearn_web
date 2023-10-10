import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmallerScreenComponent } from './register-smaller-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('RegisterSmallerScreenComponent', () => {
  let component: RegisterSmallerScreenComponent;
  let fixture: ComponentFixture<RegisterSmallerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSmallerScreenComponent ],
      imports: [MatSnackBarModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSmallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
