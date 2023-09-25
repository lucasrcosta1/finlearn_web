import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { DifficultyLevel } from 'src/app/models/topic/DifficultyLevel.model';
import { Lecture } from 'src/app/models/topic/module/lecture/Lecture.model';
import { Module } from 'src/app/models/topic/module/Module.model';
import { StoppedAt } from 'src/app/models/topic/StoppedAt.model';
import { Topic } from 'src/app/models/topic/Topic.model';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  
  topic: Topic | null = null;
  module: Module | null = null;
  stoppedAt: StoppedAt | null = null;

  private url: UrlSegment[];

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = this.route.snapshot.url;
    if (this.url) {

      const urlPath = this.url[1].path;
      this.topic = this._getTopic(urlPath);
      this.stoppedAt = this._continueFrom(this.topic); 
      
    }
  }

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

  /**
   * Fetch topic by given url path.
   * @param urlPath 
   */
  private _getTopic (urlPath: string): Topic {

    switch(urlPath) {

      case "titulos": 
        return new Topic({
          title: "Títulos Públicos",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ex eget massa finibus laoreet. Duis fermentum sed ante quis tincidunt. Nullam euismod, lorem eu cursus dapibus, est nulla pellentesque nunc, vel egestas orci magna non elit. Cras libero quam, ultrices id velit eu, pellentesque semper augue. Nulla porta dui vitae mattis consequat. Maecenas sapien ligula, faucibus non sapien sit amet, rutrum blandit dui. Aenean pulvinar eros a suscipit pretium. Aliquam tristique tortor diam. Donec sit amet maximus ipsum. Aenean nec imperdiet eros. Cras facilisis metus ac libero commodo, vestibulum euismod nunc volutpat. Quisque ullamcorper sodales felis auctor venenatis. Curabitur.",
          difficulty: new DifficultyLevel({difficultyLevelName: "Intermediáro", difficultyLevelScore: 2}),
          modules: this._getModules("Títulos Públicos"),
          topicImagePath: "/assets/images/learn/logoTitulos.svg",
          overallProgress: 35.8,
          totalHours: 100,
        });

      default: 
        return new Topic(); 


    }


  }

  /**
   * Get modules by given topic name.
   * @param topicName 
   */
  private _getModules (topicName: string): Module[] | null {

    switch(topicName) {

      case "Títulos Públicos": 
        return [
          new Module({
            title      : "Módulo 1",
            lectures   : this._getLectures("Módulo 1"),
            progress   : 100,
          }),
          new Module({
            title      : "Módulo 2",
            lectures   : this._getLectures("Módulo 2"),
            progress   : 70,
          }),
          new Module({
            title      : "Módulo 3",
            lectures   : this._getLectures("Módulo 3"),
            progress   : 30,
          }),
        ];

      default: 
        return null; 

    }

  }

  /**
   * Get lectures by given module name.
   * @param moduleName 
   */
  private _getLectures (moduleName: string): Lecture[] | null {

    switch(moduleName) {

      case "Módulo 3": 
        return [
          new Lecture({
            title      : "Como comprar títulos por meio da XP",
            difficulty : 2,
            lectureSize: 10800000,
            seenAlready: true,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/xpLogo.svg"
          }),
          new Lecture({
            title      : "Como comprar títulos na conta Inter",
            difficulty : 2,
            lectureSize: 10800000,
            seenAlready: false,
            stoppedAt: null,
            videoPath: null,
            lectureLogo: "/assets/images/learn/interLogo.svg"
          }),
        ];

      default: 
        return null; 

    }

  }

  private _continueFrom (topic: Topic): StoppedAt {

    console.log("Figure out a way to get last stopped in the video", topic);
    return new StoppedAt();

  }



}
