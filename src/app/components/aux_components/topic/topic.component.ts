import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { DifficultyLevel } from 'src/app/models/learn/topic/DifficultyLevel.model';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';
import { Module } from 'src/app/models/learn/topic/module/Module.model';
import { Topic } from 'src/app/models/learn/topic/Topic.model';
import { LearnService } from 'src/app/service/learn/learn.service';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  
  topic: Topic | null = null;
  isLoaded = false;

  private url: UrlSegment[] | null = null;

  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _learnService: LearnService,
    private _snackbarService: SnackbarService,
  ) {}

  async ngOnInit (): Promise<void> {

    this.url = this._route.snapshot.url;
    if (this.url) {

      const urlPath = this.url[1].path;
      this.topic = await this._learnService.getTopic(urlPath);
      if (this.topic) {

        this.isLoaded = true;

      }
    }

  }

  /**
   * Return to previous page.
   */
  goBack (): void {
    this._router.navigate(['/learn']);
  }

  /**
   * Send user to the requested page.
   * @param page
   */
  goToClass (moduleId: number, lectureId: number): void {

    if (this.url) {

      const route = `/${this.url[0]}/${this.url[1]}/${moduleId}/${lectureId}`;
      this._router.navigate([route]);
    
    } else {

      this._snackbarService.openSnackBar(2, `Erro ao abrir aula de id: ${lectureId}`);

    }
  }

  redirectToLecture (clickedLecture: {moduleId: number, lectureId: number}): void {

    this.goToClass(clickedLecture.moduleId, clickedLecture.lectureId);
    
  }



}
