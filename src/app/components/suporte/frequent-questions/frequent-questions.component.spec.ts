import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { FrequentQuestionsComponent } from './frequent-questions.component';
import { ApiService } from 'src/app/service/api/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('FrequentQuestionsComponent', () => {
  let component: FrequentQuestionsComponent;
  let fixture: ComponentFixture<FrequentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentQuestionsComponent ],
      imports: [HttpClientModule],
      providers: [ApiService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch api', async () => {
    const apiService = TestBed.inject(ApiService);

    const expectedPattern = {
      id: jasmine.any(Number),
      name: jasmine.any(String),
      subject: jasmine.any(String),
      description: jasmine.any(String),
      answer: jasmine.any(String),
      expanded: jasmine.any(Boolean)
    };

    const mockDataResponse = [
      {id: 0, name: "Usuário 1", subject: " Pergunta 1", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", expanded: false},
      {id: 1, name: "Usuário 2", subject: " Pergunta 2", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
      {id: 2, name: "Usuário 3", subject: " Pergunta 3", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
      {id: 3, name: "Usuário 4", subject: " Pergunta 4", description: "Aliquam laoreet pellentesque ligula, nec tristique justo gravida at. Vivamus a risus consequat ante vulputate dapibus vel in erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed blandit placerat felis, id condimentum sapien facilisis sed. Nam et diam dui. Proin quis nibh at libero pellentesque sollicitudin vitae fringilla mi. Aliquam et tincidunt augue. Donec eleifend ligula sed mauris posuere, vitae tincidunt mauris porttitor. Nullam tempus augue velit, dignissim semper odio feugiat vel?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum accumsan volutpat. Nulla facilisi. Duis rhoncus iaculis turpis, at congue velit egestas venenatis. Suspendisse eu sapien sed ipsum rutrum efficitur. Fusce luctus elementum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris euismod interdum purus ut tempor. Suspendisse ut rutrum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.", expanded: false},
    ];

    spyOn(apiService, 'getFrequentQuestions').and.returnValue(Promise.resolve(mockDataResponse));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.frequentQuestions).toEqual(jasmine.arrayContaining([expectedPattern]));
  });


});
