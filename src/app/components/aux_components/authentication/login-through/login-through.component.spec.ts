import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThroughComponent } from './login-through.component';

describe('LoginThroughComponent', () => {
  let component: LoginThroughComponent;
  let fixture: ComponentFixture<LoginThroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginThroughComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
