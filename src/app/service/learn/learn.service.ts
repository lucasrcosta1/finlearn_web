import { Injectable } from '@angular/core';
import { Topic } from 'src/app/models/learn/topic/Topic.model';
import { ApiService } from '../api/api.service';
import { Lecture } from 'src/app/models/learn/topic/module/lecture/Lecture.model';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  constructor(
    private _apiService: ApiService,
  ) { }

  /**
   * Get all topics.
   * @returns 
   */
  async getTopics (): Promise<Topic[] | null> {

    return await this._apiService.getTopics();

  }

  /**
   * Get topic.
   * @param urlPath 
   * @returns 
   */
  async getTopic (urlPath: string): Promise<Topic | null> {

    return await this._apiService.getTopic(urlPath);

  }

  /**
   * Get lecture from a module.
   * @param moduleId 
   * @param lectureId 
   * @returns 
   */
  async getLecture (moduleId: number, lectureId: number): Promise<Lecture | null> {

    const lectures = await this._apiService.getLectures(moduleId);
    if (lectures) {

      let selectedLecture: Lecture | null = null;
      lectures.forEach(
        lecture => {

          if (lecture.id == lectureId) selectedLecture = lecture;

        }
      );
      return selectedLecture;

    }
    return null;

  }

  /**
   * Get next lectures from a module.
   * @param moduleId 
   * @param lectureId 
   * @returns 
   */
  async getNextLectures (moduleId: number, lectureId: number): Promise<Lecture[] | null> {

    const lectures = await this._apiService.getLectures(moduleId);
    if (lectures) {

      let selectedLecture: Lecture[] = [];
      lectures.forEach(
        lecture => {

          if (lecture.id != lectureId) selectedLecture.push(lecture);

        }
      );
      return selectedLecture;

    }
    return null;

  }


}
