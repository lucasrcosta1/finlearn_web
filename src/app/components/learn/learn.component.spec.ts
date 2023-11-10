import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnComponent ],
      imports: [HttpClientModule, MatSnackBarModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
