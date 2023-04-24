import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassModuleComponent } from './class-module.component';

describe('ClassModuleComponent', () => {
  let component: ClassModuleComponent;
  let fixture: ComponentFixture<ClassModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
