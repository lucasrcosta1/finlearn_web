import { Component, Input } from '@angular/core';
import { FrequentQuestion } from 'src/app/models/contact/FrequentQuestion.model';
import { SharedService } from 'src/app/service/shared/shared.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
  selector: 'app-dropdown-question',
  templateUrl: './dropdown-question.component.html',
  styleUrls: ['./dropdown-question.component.css']
})
export class DropdownQuestionComponent {

  @Input()
  frequentQuestion: FrequentQuestion | null = null;
  @Input()
  color: string | null = null;
  
  style: string | null = null;

  constructor (
    private _snackbarService: SnackbarService,
  ) {}
  

  ngOnInit (): void {

    this.style = `background-color: ${this.color}; border: 1px solid #BDBDBD; border-radius: 5px;`;

  }

  openDropDown (): void {

    if (this.frequentQuestion) {

      this.frequentQuestion.expanded = !this.frequentQuestion.expanded;
      
    }

  }

}
