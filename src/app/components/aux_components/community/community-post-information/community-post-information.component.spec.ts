import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPostInformationComponent } from './community-post-information.component';

describe('CommunityPostInformationComponent', () => {
  let component: CommunityPostInformationComponent;
  let fixture: ComponentFixture<CommunityPostInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityPostInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityPostInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
