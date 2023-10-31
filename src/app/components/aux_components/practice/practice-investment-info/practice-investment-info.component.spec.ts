import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeInvestmentInfoComponent } from './practice-investment-info.component';

describe('PracticeInvestmentInfoComponent', () => {
  let component: PracticeInvestmentInfoComponent;
  let fixture: ComponentFixture<PracticeInvestmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeInvestmentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeInvestmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
