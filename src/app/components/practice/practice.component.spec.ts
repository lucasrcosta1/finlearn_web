import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent } from './practice.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PracticeComponent', () => {
  let component: PracticeComponent;
  let fixture: ComponentFixture<PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
