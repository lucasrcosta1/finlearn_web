import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeResultComponent } from './practice-result.component';

describe('PracticeResultComponent', () => {
  let component: PracticeResultComponent;
  let fixture: ComponentFixture<PracticeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
