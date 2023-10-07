import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBiggerScreenComponent } from './login-bigger-screen.component';

describe('LoginBiggerScreenComponent', () => {
  let component: LoginBiggerScreenComponent;
  let fixture: ComponentFixture<LoginBiggerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBiggerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBiggerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
