import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideLoginComponent } from './outside-login.component';

describe('OutsideLoginComponent', () => {
  let component: OutsideLoginComponent;
  let fixture: ComponentFixture<OutsideLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
