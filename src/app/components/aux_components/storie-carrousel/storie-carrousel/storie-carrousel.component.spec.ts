import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieCarrouselComponent } from './storie-carrousel.component';

describe('StorieCarrouselComponent', () => {
  let component: StorieCarrouselComponent;
  let fixture: ComponentFixture<StorieCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorieCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorieCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
