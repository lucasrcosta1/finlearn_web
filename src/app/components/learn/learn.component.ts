import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDown } from 'src/app/models/dropdown/DropDown.model';

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
  ]

  dropdowns: DropDown[] = [
    {name: 'Aprenda', content: this.titles},
    {name: 'Dificuldade', content: this.difficulty},
  ]

  cards: any[] = [
    { imageUrl: 'assets/images/learn/titulos/titulos.png', title: this.titles[0], route: '/titulos', description: 'Os títulos públicos são títulos de dívida emitidos pelo Governo Federal. Isso acontece por meio do Tesouro Direto — um programa criado, em 2002, pelo Tesouro Nacional juntamente com a Bolsa brasileira. Existem diferentes tipos de títulos públicos à disposição no Tesouro Direto. Eles são classificados em 3 modalidades: títulos públicos prefixados, pós-fixados e híbridos. Conheça mais sobre cada um deles.' },
    { imageUrl: 'assets/images/learn/renda_variavel/b3.png', title: this.titles[1], route: '/renda_variavel', description: 'Mesmo que você ainda não seja um investidor, certamente já ouviu falar sobre o sobe e desce das bolsas de valores. Isso porque uma das principais características dos ativos de renda variável é justamente a oscilação das cotações. Mas você já parou para pensar como essas negociações acontecem? No Brasil, quem organiza todo esse mercado é a B3, a bolsa de valores brasileira.' },
    { imageUrl: 'assets/images/learn/mercado_futuro/futuro.png', title: this.titles[2], route: '/mercado_futuro', description: 'O mercado futuro é uma modalidade de investimento que permite negociar contratos de compra e venda de ativos financeiros, como commodities, moedas e índices. Nele, os investidores podem se proteger contra oscilações de preços ou buscar oportunidades de lucro. É uma forma de investir baseada em expectativas futuras e oferece alavancagem e diversificação de estratégias, mas também envolve riscos.' },
    { imageUrl: 'assets/images/learn/renda_fixa/renda_fixa.jpg', title: this.titles[3], route: '/renda_fixa', description: 'A renda fixa é um tipo de investimento que oferece estabilidade e previsibilidade de retorno. Ao investir em renda fixa, você empresta seu dinheiro para uma instituição, como o governo ou uma empresa, em troca de juros e pagamento futuro. É uma opção segura para quem busca proteção e crescimento gradual do capital.' }
  ];

  constructor (
    private router: Router
  ) {}

  openModule (moduleRouteName: string) {
    this.router.navigate([`/learn${moduleRouteName}`]);
  }


}
