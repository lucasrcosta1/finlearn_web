import { Component } from '@angular/core';
import { FrequentQuestion } from 'src/app/models/contact/FrequentQuestion.model';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css']
})
export class FrequentQuestionsComponent {

  frequentQuestions: FrequentQuestion[] | null = null;

  constructor (
    private _apiService: ApiService,
  ) {}
  
  async ngOnInit() {

    this.frequentQuestions = await this._fetchFrequentQuestions(this._apiService);

  }

  /**
   * Fetch frequent questions.
   * @param api 
   * @returns 
   */
  private _fetchFrequentQuestions(api: ApiService): Promise<FrequentQuestion[]> {

    return api.getFrequentQuestions();

  }

}
