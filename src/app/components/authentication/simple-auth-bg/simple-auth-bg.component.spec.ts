import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAuthBgComponent } from './simple-auth-bg.component';

describe('SimpleAuthBgComponent', () => {
  let component: SimpleAuthBgComponent;
  let fixture: ComponentFixture<SimpleAuthBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAuthBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAuthBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
