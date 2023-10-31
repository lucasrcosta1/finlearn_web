import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { BtnPlusInputComponent } from './btn-plus-input.component';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('BtnPlusInputComponent', () => {
  let component: BtnPlusInputComponent;
  let fixture: ComponentFixture<BtnPlusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnPlusInputComponent],
      imports: [HttpClientModule, MatSnackBarModule], // Include MatSnackBarModule
      providers: [SnackbarService],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnPlusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
