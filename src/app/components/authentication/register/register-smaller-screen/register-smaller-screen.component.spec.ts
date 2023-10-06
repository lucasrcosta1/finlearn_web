import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmallerScreenComponent } from './register-smaller-screen.component';

describe('RegisterSmallerScreenComponent', () => {
  let component: RegisterSmallerScreenComponent;
  let fixture: ComponentFixture<RegisterSmallerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSmallerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSmallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
