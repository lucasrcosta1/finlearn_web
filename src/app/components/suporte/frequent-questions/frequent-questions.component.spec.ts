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

  it('should fetch api to get frequent questions', async () => {
    const apiService = TestBed.inject(ApiService);

    const expectedPattern = {
      id: jasmine.any(Number),
      name: jasmine.any(String),
      subject: jasmine.any(String),
      answer: jasmine.any(String),
      expanded: jasmine.any(Boolean)
    };

    const mockDataResponse = [
      {id: 0, name: "Usuário 1", subject: "Como entro em contato com um especialista?", answer: "Para entrar em contato com um especialista você pode iniciar uma nova conversa na sessão 'Comunidade' e mencioná-lo no chat.", expanded: false},
      {id: 1, name: "Usuário 2", subject: "Como participar de uma conversa na comunidade?",answer: "Para participar de uma conversa na Comunidade você deve estar logado em sua conta, acessar a aba 'Comunidade' e procurar pela conversa que deseja participar. Ao selecionar a conversa desejada, a opção de 'Participar da conversa' ficará disponível.", expanded: false},
      {id: 2, name: "Usuário 3", subject: "Como faço para praticar os conteúdos aprendidos?", answer: "A sessão 'Pratique' oferece atividades em que você pode praticar e simular investimentos, para compreender como os diferentes tipos de investimentos, e suas diferentes taxas, afetam o rendimento futuro.", expanded: false},
      {id: 2, name: "Usuário 3", subject: "Como eu posso simular um investimento?", answer: "Acesse o menu principal no canto superior esquerdo da página e clique na aba 'Pratique',desse ponto em diante siga o passo a passo para simular um investimento personalizado para as suas necessidades.", expanded: false},
      {id: 3, name: "Usuário 4", subject: "Como visualizo quais aulas já assisti?", answer: "Para acompanhar o seu progresso em um curso, basta selecioná-lo na aba 'Aprenda' e verificar através do widget 'Progresso no curso' quantos por cento você evoluiu e verificar as demais estatísticas de progresso também.", expanded: false},
    ];

    spyOn(apiService, 'getFrequentQuestions').and.returnValue(Promise.resolve(mockDataResponse));

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.frequentQuestions).toEqual(jasmine.arrayContaining([expectedPattern]));
  });


});
