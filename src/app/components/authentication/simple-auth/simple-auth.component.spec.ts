import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAuthComponent } from './simple-auth.component';

describe('SimpleAuthComponent', () => {
  let component: SimpleAuthComponent;
  let fixture: ComponentFixture<SimpleAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
