import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInputComponent } from './community-input.component';

describe('CommunityInputComponent', () => {
  let component: CommunityInputComponent;
  let fixture: ComponentFixture<CommunityInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
