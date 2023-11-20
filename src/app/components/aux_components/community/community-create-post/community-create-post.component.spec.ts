import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCreatePostComponent } from './community-create-post.component';

describe('CommunityCreatePostComponent', () => {
  let component: CommunityCreatePostComponent;
  let fixture: ComponentFixture<CommunityCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityCreatePostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
