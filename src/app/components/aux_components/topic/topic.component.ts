import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { DifficultyLevel } from 'src/app/models/topic/DifficultyLevel.model';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';
import { Module } from 'src/app/models/topic/module/Module.model';
import { Topic } from 'src/app/models/topic/Topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  
  topic: Topic | null = null;

  private url: UrlSegment[];

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = this.route.snapshot.url;
    if (this.url) {

      const urlPath = this.url[1].path;
      this.topic = this._getTopic(urlPath);

    }
  }

  /**
   * Return to previous page.
   */
  goBack (): void {
    this.router.navigate(['/learn']);
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  goToClass (className: string): void {
    const route = `/${this.url[0]}/${this.url[1]}/${className}`;
    this.router.navigate([route]);
  }

  redirectToLecture (lectureTitle: string): void {

    this.goToClass(lectureTitle)
    
  }

  /**
   * Fetch topic by given url path.
   * @param urlPath 
   */
  private _getTopic (urlPath: string): Topic | null {

    switch(urlPath) {

      case "titulos": 
        return new Topic({
          title: "Títulos Públicos",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
          difficulty: new DifficultyLevel({difficultyLevelName: "Intermediáro", difficultyLevelScore: 2}),
          modules: this._getModules("titulos"),
          topicImagePath: "/assets/images/learn/titulos/logoTitulos.svg",
          overallProgress: 52.7,
          totalHours: 100,
          stoppedAt: new Lecture({
            title      : "Tipos de títulos públicos",
            difficulty : 1,
            lectureSize: 1200000,
            seenAlready: false,
            stoppedAt: 600000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/tipos.svg"
          })
        });

      case "renda_variavel": 
        return new Topic({
          title: "Renda variável",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
          difficulty: new DifficultyLevel({difficultyLevelName: "Difícil", difficultyLevelScore: 3}),
          modules: this._getModules("renda_variavel"),
          topicImagePath: "/assets/images/learn/renda_variavel/logoRendaVariavel.svg",
          overallProgress: 68.7,
          totalHours: 320,
          stoppedAt: new Lecture({
            title      : "Tipos de títulos públicos",
            difficulty : 1,
            lectureSize: 1200000,
            seenAlready: false,
            stoppedAt: 600000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/tipos.svg"
          })
        });

      case "mercado_futuro": 
        return new Topic({
          title: "Mercado futuro",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
          difficulty: new DifficultyLevel({difficultyLevelName: "Difícil", difficultyLevelScore: 3}),
          modules: this._getModules("mercado_futuro"),
          topicImagePath: "/assets/images/learn/mercado_futuro/logoMercadoFuturo.svg",
          overallProgress: 37.2,
          totalHours: 236,
          stoppedAt: new Lecture({
            title      : "Tipos de títulos públicos",
            difficulty : 1,
            lectureSize: 1200000,
            seenAlready: false,
            stoppedAt: 600000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/tipos.svg"
          })
        });

      case "renda_fixa": 
        return new Topic({
          title: "Renda fixa",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
          difficulty: new DifficultyLevel({difficultyLevelName: "Fácil", difficultyLevelScore: 1}),
          modules: this._getModules("renda_fixa"),
          topicImagePath: "/assets/images/learn/renda_fixa/logoRendaFixa.svg",
          overallProgress: 95.4,
          totalHours: 208,
          stoppedAt: new Lecture({
            title      : "Tipos de títulos públicos",
            difficulty : 1,
            lectureSize: 1200000,
            seenAlready: false,
            stoppedAt: 600000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/tipos.svg"
          })
        });

      default: 
        return null; 


    }


  }

  /**
   * Get modules by given topic name.
   * @param topicName 
   */
  private _getModules (topicName: string): Module[] | null {

    switch(topicName) {

      case "titulos": 
        return [
          new Module({
            title      : "Módulo 1",
            lectures   : this._getLectures("Módulo 1"),
            progress   : 100,
            expanded   : false
          }),
          new Module({
            title      : "Módulo 2",
            lectures   : this._getLectures("Módulo 2"),
            progress   : 50,
            expanded   : false
          }),
          new Module({
            title      : "Módulo 3",
            lectures   : this._getLectures("Módulo 3"),
            progress   : 33.3,
            expanded   : false
          }),
        ];

      default: 
        return [
          new Module({
            title      : "Módulo 1",
            lectures   : this._getLectures("Módulo 1"),
            progress   : 100,
            expanded   : false
          }),
          new Module({
            title      : "Módulo 2",
            lectures   : this._getLectures("Módulo 2"),
            progress   : 50,
            expanded   : false
          }),
          new Module({
            title      : "Módulo 3",
            lectures   : this._getLectures("Módulo 3"),
            progress   : 33.3,
            expanded   : false
          }),
        ];  

    }

  }

  /**
   * Get lectures by given module name.
   * @param moduleName 
   */
  private _getLectures (moduleName: string): Lecture[] | null {

    switch(moduleName) {

      case "Módulo 1": 
        return [
          new Lecture({
            title      : "Conheca a plataforma",
            difficulty : 1,
            lectureSize: 300000,
            seenAlready: true,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/conheca_plataforma.svg"
          }),
          new Lecture({
            title      : "O que são títulos públicos",
            difficulty : 1,
            lectureSize: 600000,
            seenAlready: true,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/o_que_sao.svg"
          }),
        ];

      case "Módulo 2": 
        return [
          new Lecture({
            title      : "Tipos de títulos públicos",
            difficulty : 1,
            lectureSize: 1200000,
            seenAlready: false,
            stoppedAt: 600000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/titulos/tipos.svg"
          }),
        ];
  
      case "Módulo 3": 
        return [
          new Lecture({
            title      : "Como comprar títulos na conta XP",
            difficulty : 2,
            lectureSize: 1800000,
            seenAlready: true,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/xpLogo.svg"
          }),
          new Lecture({
            title      : "Como comprar títulos na conta Inter",
            difficulty : 3,
            lectureSize: 1800000,
            seenAlready: false,
            stoppedAt: 720000,
            videoPath: null,
            lectureLogo: "/assets/images/learn/interLogo.svg"
          }),
          new Lecture({
            title      : "Como comprar títulos na conta Pagbank",
            difficulty : 2,
            lectureSize: 1800000,
            seenAlready: false,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/pagSeguroLogo.svg"
          }),
        ];

      default: 
        return null; 

    }

  }


}
