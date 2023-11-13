import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default tab set to "progress_tab"', () => {
    expect(component.low_component_tab).toEqual('progress_tab');
  });

  it('should switch to the specified tab', () => {
    component.switch_to_tab('daily_question_tab');
    expect(component.low_component_tab).toEqual('daily_question_tab');

    component.switch_to_tab('calendar_tab');
    expect(component.low_component_tab).toEqual('calendar_tab');

    component.switch_to_tab('progress_tab');
    expect(component.low_component_tab).toEqual('progress_tab');

    component.switch_to_tab('wallet_tab');
    expect(component.low_component_tab).toEqual('wallet_tab');

    component.switch_to_tab('news_tab');
    expect(component.low_component_tab).toEqual('news_tab');
  });

it('should display correct image when switching tabs', () => {

    component.switch_to_tab('daily_question_tab');
    fixture.detectChanges();
    const dailyQuestionImage = fixture.nativeElement.querySelector('#dailyQuestionImage');
    expect(dailyQuestionImage.src).toContain('assets/images/home/daily_question.png');

    component.switch_to_tab('calendar_tab');
    fixture.detectChanges();
    const calendarImage = fixture.nativeElement.querySelector('#calendarImage');
    expect(calendarImage.src).toContain('assets/images/home/calendar.png');

    component.switch_to_tab('progress_tab');
    fixture.detectChanges();
    const progressImage = fixture.nativeElement.querySelector('#progressImage');
    expect(progressImage.src).toContain('assets/images/home/progress.png');

    component.switch_to_tab('wallet_tab');
    fixture.detectChanges();
    const walletImage = fixture.nativeElement.querySelector('#walletImage');
    expect(walletImage.src).toContain('assets/images/home/wallet.jpg');

    component.switch_to_tab('news_tab');
    fixture.detectChanges();
    const newsImage = fixture.nativeElement.querySelector('#newsImage');
    expect(newsImage.src).toContain('assets/images/home/news.jpg');
  });

  it('should handle button click event', () => {
  spyOn(component, 'redirectToPage');

  const button = fixture.nativeElement.querySelector('button');
  button.click();

  expect(component.redirectToPage).toHaveBeenCalled();
});

  it('should navigate to /learn/titulos/1/5 on button click', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.redirectToPage();

    // Espera que as promises pendentes sejam resolvidas
    tick();

    // Verifica se a função 'navigate' foi chamada com o caminho correto
    expect(router.navigate).toHaveBeenCalledWith([`/learn/titulos/1`]);
  }));

  it('should display buttons with correct classes', () => {
  const buttons = fixture.nativeElement.querySelectorAll('button');

  expect(buttons[1].classList).toContain('invisible_button');
  expect(buttons[2].classList).toContain('invisible_button');
  expect(buttons[3].classList).toContain('invisible_button');
  expect(buttons[4].classList).toContain('invisible_button');
  expect(buttons[5].classList).toContain('invisible_button');
  expect(buttons[6].classList).toContain('invisible_button');
  expect(buttons[7].classList).toContain('invisible_button');
  expect(buttons[8].classList).toContain('invisible_button');
});

});
