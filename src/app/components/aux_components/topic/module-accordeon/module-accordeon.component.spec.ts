import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAccordeonComponent } from './module-accordeon.component';

describe('ModuleAccordeonComponent', () => {
  let component: ModuleAccordeonComponent;
  let fixture: ComponentFixture<ModuleAccordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleAccordeonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
