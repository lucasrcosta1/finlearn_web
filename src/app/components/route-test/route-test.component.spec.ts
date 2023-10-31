import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTestComponent } from './route-test.component';
import { HttpClientModule } from '@angular/common/http';

describe('RouteTestComponent', () => {
  let component: RouteTestComponent;
  let fixture: ComponentFixture<RouteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTestComponent ],
      imports: [HttpClientModule], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
