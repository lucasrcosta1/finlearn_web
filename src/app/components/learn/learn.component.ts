import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/models/learn/dropdown/DropDown.model';
import { Card } from 'src/app/models/learn/topic/Card.module';
import { Topic } from 'src/app/models/learn/topic/Topic.model';
import { LearnService } from 'src/app/service/learn/learn.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {


  titles = [
    'Títulos Públicos',
    'Renda variável',
    'Mercado Futuro',
    'Renda Fixa'
  ];
  difficulty = [
    'Fácil',
    'Médio',
    'Dificil'
  ];
  dropdowns: DropDown[] = [
    {name: 'Aprenda', content: this.titles},
    {name: 'Dificuldade', content: this.difficulty},
  ];
  topics: Topic[] | null = null;
  cards: Card[] | null = null;

  constructor (
    private _router: Router,
    private _learnService: LearnService,
    private _snackbarService: SnackbarService,
  ) {


  }

  async ngOnInit(): Promise<void> {

    this.topics = await this._learnService.getTopics();
    if (this.topics != null) {

      this.cards = this._createCards(this.topics);
      
    } else {

      this._snackbarService.openSnackBar(5, "Nenhum tópico encontrado");

    }

  }

  /**
   * Open module.
   * @param moduleRouteName 
   */
  openModule (moduleRouteName: string | null) {
   
    moduleRouteName ? this._router.navigate([`/learn${moduleRouteName}`]) : this._snackbarService.openSnackBar(5, `Não é possível redirecionar para a página '${moduleRouteName}'.`);
  
  }

  /**
   * Create topics' cards.
   * @param topics 
   * @returns 
   */
  private _createCards (topics: Topic[]): Card[] {

    let cards: Card[] = [];
    topics.forEach(
      topic => {

        cards.push(new Card({topicLogoPath: topic.topicLogoPath, title: topic.title, route: topic.route, description: topic.description}));

      }
    );
    return cards;

  }

}
