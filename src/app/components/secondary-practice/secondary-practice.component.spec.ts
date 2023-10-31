import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPracticeComponent } from './secondary-practice.component';

describe('SecondaryPracticeComponent', () => {
  let component: SecondaryPracticeComponent;
  let fixture: ComponentFixture<SecondaryPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryPracticeComponent ]
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
