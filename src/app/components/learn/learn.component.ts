import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/models/dropdown/DropDown.model';
import { Module } from 'src/app/models/modules/Module.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {

  titles = [
    'Títulos Públicos',
    'B3',
    'Mercado Futuro',
    'Renda Fixa'
  ];

  difficulty = [
    'Fácil',
    'Médio',
    'Dificil'
  ]

  dropdowns: DropDown[] = [
    {name: 'Aprenda', content: this.titles},
    {name: 'Dificuldade', content: this.difficulty},
  ]

  cards: any[] = [
    { imageUrl: 'assets/images/learn/titulos.png', title: this.titles[0], route: '/titulos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tortor nec ante placerat aliquam. Suspendisse malesuada tellus non ante varius egestas. Suspendisse potenti. Aenean ultricies scelerisque ex, sit amet egestas nibh pulvinar eget. Vestibulum in ipsum a urna porttitor hendrerit. Duis mattis sem aliquam vulputate hendrerit. Class aptent taciti.' },
    { imageUrl: 'assets/images/learn/b3.png', title: this.titles[1], route: '/renda_variavel', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tortor nec ante placerat aliquam. Suspendisse malesuada tellus non ante varius egestas. Suspendisse potenti. Aenean ultricies scelerisque ex, sit amet egestas nibh pulvinar eget. Vestibulum in ipsum a urna porttitor hendrerit. Duis mattis sem aliquam vulputate hendrerit. Class aptent taciti.' },
    { imageUrl: 'assets/images/learn/futuro.png', title: this.titles[2], route: '/mercado_futuro', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tortor nec ante placerat aliquam. Suspendisse malesuada tellus non ante varius egestas. Suspendisse potenti. Aenean ultricies scelerisque ex, sit amet egestas nibh pulvinar eget. Vestibulum in ipsum a urna porttitor hendrerit. Duis mattis sem aliquam vulputate hendrerit. Class aptent taciti.' },
    { imageUrl: 'assets/images/learn/renda_fixa.jpg', title: this.titles[3], route: '/renda_fixa', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tortor nec ante placerat aliquam. Suspendisse malesuada tellus non ante varius egestas. Suspendisse potenti. Aenean ultricies scelerisque ex, sit amet egestas nibh pulvinar eget. Vestibulum in ipsum a urna porttitor hendrerit. Duis mattis sem aliquam vulputate hendrerit. Class aptent taciti.' }
  ];

  constructor (
    private router: Router
  ) {}

  openModule (moduleRouteName: string) {
    this.router.navigate([`/learn${moduleRouteName}`]);
    console.log("open route", moduleRouteName);
  }


}
