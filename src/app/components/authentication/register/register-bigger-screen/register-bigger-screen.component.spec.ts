import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBiggerScreenComponent } from './register-bigger-screen.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterService } from '../register.service';
import { LoginService } from '../../login/login.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

describe('RegisterBiggerScreenComponent', () => {
  let component: RegisterBiggerScreenComponent;
  let fixture: ComponentFixture<RegisterBiggerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBiggerScreenComponent ],
      imports: [MatSnackBarModule], 
      providers: [
        RegisterService, 
        LoginService,   
        SnackbarService, 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBiggerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
