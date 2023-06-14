import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPlusInputComponent } from './btn-plus-input.component';

describe('BtnPlusInputComponent', () => {
  let component: BtnPlusInputComponent;
  let fixture: ComponentFixture<BtnPlusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPlusInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPlusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
