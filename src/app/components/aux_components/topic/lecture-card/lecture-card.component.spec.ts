import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureCardComponent } from './lecture-card.component';

describe('LectureCardComponent', () => {
  let component: LectureCardComponent;
  let fixture: ComponentFixture<LectureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
