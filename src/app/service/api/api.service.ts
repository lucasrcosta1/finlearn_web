import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { ApiResponse } from 'src/app/models/api/ApiResponse.model';
import { FrequentQuestion } from 'src/app/models/contact/FrequentQuestion.model';
import { DifficultyLevel } from 'src/app/models/learn/topic/DifficultyLevel.model';
import { Topic } from 'src/app/models/learn/topic/Topic.model';
import { Module } from 'src/app/models/learn/topic/module/Module.model';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';
import { InvestmentType } from 'src/app/models/practice/InvestmentType.model';
import { RegisterUser } from 'src/app/models/user/RegisterUser.model';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  response = "";
  
  private investmentTypes = [
    {id: 0, name: "Tesouro Selic", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 1, interestRate: 0.1275, clicked: false},
    {id: 1, name: "Tesouro IPCA", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 3, interestRate: 0.465, clicked: false},
    {id: 2, name: "Tesouro Prefixado", investmentLogoPath: "/assets/images/pratique/public_treasure.svg", redemptionPeriodInYears: 3, interestRate: 0.3348, clicked: false},
    {id: 3, name: "CDB", investmentLogoPath: "/assets/images/pratique/cdb.svg", redemptionPeriodInYears: 1, interestRate: 0.15, clicked: false},
    {id: 4, name: "Carta de Crédito Imobiliário", investmentLogoPath: "/assets/images/pratique/credit_letter.svg", redemptionPeriodInYears: 1, interestRate: 0.1365, clicked: false},
    {id: 5, name: "Carta de Crédito do Agronegócio", investmentLogoPath: "/assets/images/pratique/credit_letter.svg", redemptionPeriodInYears: 1, interestRate: 0.1365, clicked: false},
    {id: 6, name: "Certificado de Recebíveis Imobiliários", investmentLogoPath: "/assets/images/pratique/credit_certified.svg", redemptionPeriodInYears: 1, interestRate: 0.12, clicked: false},
    {id: 7, name: "Certificado de Recebíveis do Agronegócio", investmentLogoPath: "/assets/images/pratique/credit_certified.svg", redemptionPeriodInYears: 1, interestRate: 0.13, clicked: false},
    {id: 8, name: "Poupança",investmentLogoPath: "/assets/images/pratique/pig.svg", redemptionPeriodInYears: 1, interestRate: 0.45, clicked: false},
  ]; //should be temporary until the DB is populated with that information
  private defaultLectures1 = [
    new Lecture({
      id         : 1,
      title      : "Conheca a plataforma",
      difficulty : 1,
      lectureSize: 300000,
      seenAlready: true,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/conheca_plataforma.svg"
    }),
    new Lecture({
      id         : 2,
      title      : "O que são títulos públicos?",
      difficulty : 1,
      lectureSize: 600000,
      seenAlready: true,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
    }),
    new Lecture({
      id         : 3,
      title      : "Vantagens de investir em títulos públicos",
      difficulty : 1,
      lectureSize: 600000,
      seenAlready: true,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
    }),
    new Lecture({
      id         : 4,
      title      : "Desvantagens de investir em títulos públicos",
      difficulty : 1,
      lectureSize: 600000,
      seenAlready: true,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
    }),
    new Lecture({
      id         : 5,
      title      : "Tipos de títulos públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    }),
    new Lecture({
      id         : 6,
      title      : "Entendendo os Rendimentos dos Títulos Públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    })
  ]; //should be temporary until the DB is populated with that information
  private defaultLectures2 = [
    new Lecture({
      id         : 7,
      title      : "Riscos associados aos Títulos Públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    }),
    new Lecture({
      id         : 8,
      title      : "Estratégias de Investimento em Títulos Públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    }),
    new Lecture({
      id         : 9,
      title      : "Cálculo de Rendimento e Impostos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    }),
    new Lecture({
      id         : 10,
      title      : "Exemplos Práticos de Investimento em Títulos Públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    }),
    new Lecture({
      id         : 11,
      title      : "Dicas para Maximizar seus Investimentos em Títulos Públicos",
      difficulty : 1,
      lectureSize: 1200000,
      seenAlready: false,
      stoppedAt: 600000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/titulos/tipos.svg"
    })
  ]; //should be temporary until the DB is populated with that information
  private defaultLectures3 = [
    new Lecture({
      id         : 12,
      title      : "Como comprar títulos na conta XP",
      difficulty : 2,
      lectureSize: 1800000,
      seenAlready: true,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/xpLogo.svg"
    }),
    new Lecture({
      id         : 13,
      title      : "Como comprar títulos na conta Inter",
      difficulty : 3,
      lectureSize: 1800000,
      seenAlready: false,
      stoppedAt: 720000,
      videoPath: null,
      lectureLogo: "/assets/images/learn/interLogo.svg"
    }),
    new Lecture({
      id         : 14,
      title      : "Como comprar títulos na conta Pagbank",
      difficulty : 2,
      lectureSize: 1800000,
      seenAlready: false,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/pagSeguroLogo.svg"
    }),
    new Lecture({
      id         : 15,
      title      : "Dúvidas frequentes",
      difficulty : 2,
      lectureSize: 1800000,
      seenAlready: false,
      stoppedAt: null,
      videoPath: null,
      lectureLogo: "/assets/images/learn/pagSeguroLogo.svg"
    }),
  ]; //should be temporary until the DB is populated with that information
  private lecturesMap: Map<number, Lecture[]> = new Map<number, Lecture[]>([
    [1, this.defaultLectures1],
    [2, this.defaultLectures2],
    [3, this.defaultLectures3],
  ]); //should be temporary until the DB is populated with that information
  private defaultModules = [
    new Module({
      id         : 1,
      title      : "Módulo 1",
      lectures   : this.lecturesMap.get(1) ? this.lecturesMap.get(1)! : null,
      progress   : 100,
      expanded   : false
    }),
    new Module({
      id         : 2,
      title      : "Módulo 2",
      lectures   : this.lecturesMap.get(2) ? this.lecturesMap.get(2)! : null,
      progress   : 50,
      expanded   : false
    }),
    new Module({
      id         : 3,
      title      : "Módulo 3",
      lectures   : this.lecturesMap.get(3) ? this.lecturesMap.get(3)! : null,
      progress   : 33.3,
      expanded   : false
    }),
  ]; //should be temporary until the DB is populated with that information
  private modulesMap: Map<string, Module[]> = new Map<string, Module[]>([
    ["Títulos Públicos",this.defaultModules],
    ["Renda variável",this.defaultModules],
    ["Mercado futuro",this.defaultModules],
    ["Renda fixa",this.defaultModules],
  ]); //should be temporary until the DB is populated with that information
  private topics = [
    new Topic({
      id         : 0,
      title: "Títulos Públicos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
      difficulty: new DifficultyLevel({difficultyLevelName: "Intermediáro", difficultyLevelScore: 2}),
      modules: this.modulesMap.get("Títulos Públicos")!,
      topicLogoPath: "assets/images/learn/titulos/titulos.png",
      topicImagePath: "/assets/images/learn/titulos/logoTitulos.svg",
      overallProgress: 52.7,
      totalHours: 100,
      stoppedModuleId: 1,
      stoppedLectureId: 3,
      route: "/titulos"
    }), 
    new Topic({
      id         : 1,
      title: "Renda variável",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
      difficulty: new DifficultyLevel({difficultyLevelName: "Difícil", difficultyLevelScore: 3}),
      modules: this.modulesMap.get("Renda variável")!,
      topicLogoPath: "assets/images/learn/renda_variavel/b3.png",
      topicImagePath: "/assets/images/learn/renda_variavel/logoRendaVariavel.svg",
      overallProgress: 68.7,
      totalHours: 320,
      stoppedModuleId: null,
      stoppedLectureId: null,
      route: "/renda_variavel"
    }),
    new Topic({
      id         : 2,
      title: "Mercado futuro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
      difficulty: new DifficultyLevel({difficultyLevelName: "Difícil", difficultyLevelScore: 3}),
      modules: this.modulesMap.get("Mercado futuro")!,
      topicLogoPath: "assets/images/learn/mercado_futuro/futuro.png",
      topicImagePath: "/assets/images/learn/mercado_futuro/logoMercadoFuturo.svg",
      overallProgress: 37.2,
      totalHours: 236,
      stoppedModuleId: 3,
      stoppedLectureId: 14,
      route: "/mercado_futuro"
    }),
    new Topic({
      id         : 3,
      title: "Renda fixa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
      difficulty: new DifficultyLevel({difficultyLevelName: "Fácil", difficultyLevelScore: 1}),
      modules: this.modulesMap.get("Renda fixa")!,
      topicLogoPath: "assets/images/learn/renda_fixa/renda_fixa.jpg",
      topicImagePath: "/assets/images/learn/renda_fixa/logoRendaFixa.svg",
      overallProgress: 95.4,
      totalHours: 208,
      stoppedModuleId: 2,
      stoppedLectureId: 8,
      route: "/renda_fixa"
    })
  ]; //should be temporary until the DB is populated with that information
  
  constructor(
    private _http: HttpClient,
  ) { }


  async post (route: string, requestBody: any, post_id: number | null, headers?: HttpHeaders): Promise<ApiResponse> {
    let apiResponse = new ApiResponse();
    try {
      if (!headers) headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      if (post_id == null) post_id = 0;
      const params = new HttpParams().set('post_id', post_id!.toString());
      const response: any = await firstValueFrom(this._http.post(environment.HTTP_REQUEST + route, requestBody, {headers, params})
      .pipe (
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          console.log("api service error", error);
          if (typeof(error.error.detail) == 'string') { //not an object
            // console.error('An error occurred:', error.error.detail);
            this.response = error.error.detail;
          } else {
            // console.error('An error occurred:', error.error.detail[0]);
            this.response = error.error.detail[0].msg;
          }
          return throwError(() => new Error(this.response));
          // window.alert('An error occurred:' + error.error.detail);
        })
      ));
      // console.log('POST request successful:', response);
      if (response.access_token) localStorage.setItem('token', response.access_token);
      apiResponse.setSuccess(true);
      apiResponse.setResponse(response);
      // console.log(apiResponse);
      return apiResponse;
    } catch (error) {
      console.error('An error occurred:', error);

      apiResponse.setSuccess(false);
      apiResponse.setResponse(error);
      return apiResponse;
    }
  }

  async get (route: string, headers?: HttpHeaders): Promise<ApiResponse> {
    let apiResponse = new ApiResponse();
    try {
      if (!headers) headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`);
      const response: any = await firstValueFrom(this._http.get(environment.HTTP_REQUEST + route, {headers})
      .pipe (
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          if (typeof(error.error.detail) == 'string') { //not an object
            // console.error('An error occurred:', error.error.detail);
            this.response = error.error.detail;
          } else {
            console.error('An error occurred:', error);
            this.response = error.error.detail[0].msg;
          }
          return throwError(() => new Error(this.response));
          // window.alert('An error occurred:' + error.error.detail);
        })
      ));

      // console.log('POST request successful:', response);
      apiResponse.setSuccess(true);
      apiResponse.setResponse(response);
      return apiResponse;
    } catch (error: any) {
      console.error('An error occurred:', error);

      apiResponse.setSuccess(false);
      apiResponse.setResponse(error);
      return apiResponse;
    }
  }

  /**
   * Get frequent questions from api.
   * @returns 
   */
  getFrequentQuestions (): Promise<FrequentQuestion[]> {

    // const apiUrl = 'https://your-api-url/frequent-questions';

    // return this._http.get<FrequentQuestion[]>(apiUrl);
    return new Promise(
      (resolve, error) => {
        resolve([
          {id: 0, name: "Usuário 1", subject: "Como entro em contato com um especialista?", answer: "Para entrar em contato com um especialista você pode iniciar uma nova conversa na sessão 'Comunidade' e mencioná-lo no chat.", expanded: false},
          {id: 1, name: "Usuário 2", subject: "Como participar de uma conversa na comunidade?",answer: "Para participar de uma conversa na Comunidade você deve estar logado em sua conta, acessar a aba 'Comunidade' e procurar pela conversa que deseja participar. Ao selecionar a conversa desejada, a opção de 'Participar da conversa' ficará disponível.", expanded: false},
          {id: 2, name: "Usuário 3", subject: "Como faço para praticar os conteúdos aprendidos?", answer: "A sessão 'Pratique' oferece atividades em que você pode praticar e simular investimentos, para compreender como os diferentes tipos de investimentos, e suas diferentes taxas, afetam o rendimento futuro.", expanded: false},
          {id: 2, name: "Usuário 3", subject: "Como eu posso simular um investimento?", answer: "Acesse o menu principal no canto superior esquerdo da página e clique na aba 'Pratique',desse ponto em diante siga o passo a passo para simular um investimento personalizado para as suas necessidades.", expanded: false},
          {id: 3, name: "Usuário 4", subject: "Como visualizo quais aulas já assisti?", answer: "Para acompanhar o seu progresso em um curso, basta selecioná-lo na aba 'Aprenda' e verificar através do widget 'Progresso no curso' quantos por cento você evoluiu e verificar as demais estatísticas de progresso também.", expanded: false},
        ]);
      }
    );

  }

  /**
   * Get investment types from api.
   * @returns 
   */
  getInvestmentTypes (): Promise<InvestmentType[]> {

    return new Promise(
      resolve => {
        resolve(this.investmentTypes);
      }
    );

  }

  /**
   * Get investment type based on id.
   * @param id 
   * @returns 
   */
  getInvestmentTypeBasedOnId (id: number): Promise<InvestmentType> {

    return new Promise(
      resolve => {
        this.investmentTypes.forEach(
          investmentType => {
            if (investmentType.id == id) resolve(investmentType);
          }
        );
      }
    );

  } 

  /**
   * Get topics.
   * @returns 
   */
  getTopics (): Promise<Topic[]> {

    return new Promise(
      resolve => {
        resolve(this.topics);
      }
    );

  }

  /**
   * User's login.
   * @param username
   * @param password
   */
  login (username: string, password: string): Observable<any> {

    const route   = '/auth/login';
    const body    = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(environment.HTTP_REQUEST + route, body, {headers});

  }

  /**
   * Fetch topic by given url path.
   * @param urlPath 
   */
  getTopic (urlPath: string): Promise<Topic | null> {

    return new Promise (
      resolve => {
        switch(urlPath) {
          
          case "titulos":
            resolve (this.topics[0]);
            break;
      
          case "renda_variavel": 
            resolve (this.topics[1]);
            break;
    
          case "mercado_futuro": 
            resolve (this.topics[2]);
            break;
          
          case "renda_fixa": 
            resolve (this.topics[3]);
            break;
            
          default: 
            resolve (null);
            break; 
      
      
        }
      }
    );

  }

  /**
   * Get modules by given topic name.
   * @param topicName 
   */
  getModules (topicName: string): Promise<Module[] | null> {

    const modules = this.modulesMap.get(topicName);
    return new Promise (
      resolve => {
        
        if (modules != undefined) resolve(modules);
        else resolve(null);
      
      }
    );

  }

  /**
   * Get lectures by given module name.
   * @param moduleId 
   */
  getLectures (moduleId: number): Promise<Lecture[] | null> {
    
    const lectures = this.lecturesMap.get(moduleId);
    return new Promise (
      resolve => {
        
        if (lectures != undefined) resolve(lectures);
        else resolve(null);
      
      }
    );

  }

  /**
   * Register new user.
   * @param userToBeRegistered 
   */
  registerNewUser (userToBeRegistered: RegisterUser): Observable<any> {

    const route = '/user/create';
    const requestBody = {
      email: userToBeRegistered.username,
      cpf: "",
      name: userToBeRegistered.fullname,
      telephone: userToBeRegistered.phone,
      password: userToBeRegistered.password
    }
    return this._http.post(environment.HTTP_REQUEST + route, requestBody);
  
  }

}
