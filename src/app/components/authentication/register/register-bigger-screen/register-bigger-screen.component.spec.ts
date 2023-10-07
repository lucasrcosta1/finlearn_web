import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBiggerScreenComponent } from './register-bigger-screen.component';

describe('RegisterBiggerScreenComponent', () => {
  let component: RegisterBiggerScreenComponent;
  let fixture: ComponentFixture<RegisterBiggerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBiggerScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBiggerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
