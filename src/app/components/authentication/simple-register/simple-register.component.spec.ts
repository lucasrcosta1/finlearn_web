import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRegisterComponent } from './simple-register.component';

describe('SimpleRegisterComponent', () => {
  let component: SimpleRegisterComponent;
  let fixture: ComponentFixture<SimpleRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
