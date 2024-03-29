import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPracticeComponent } from './secondary-practice.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SecondaryPracticeComponent', () => {
  let component: SecondaryPracticeComponent;
  let fixture: ComponentFixture<SecondaryPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryPracticeComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
