import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { SimpleLoginComponent } from './simple-login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SimpleLoginComponent', () => {
  let component: SimpleLoginComponent;
  let fixture: ComponentFixture<SimpleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleLoginComponent],
      imports: [HttpClientModule, MatSnackBarModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
