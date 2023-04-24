import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/models/modules/Module.model';

@Component({
  selector: 'app-class-module',
  templateUrl: './class-module.component.html',
  styleUrls: ['./class-module.component.css']
})
export class ClassModuleComponent implements OnInit {
  public moduleSet    = new Set<Module>();
  public genders      = ['Renda Fixa', 'Tesouro Direto', 'Fundos de Investimento', 'Renda Variavel'];
  public minutes      = ['00:20','00:30','00:45','01:00'];
  public actualModule = 'Primeiros Passos';
  @Input()
  public numberOfStoriesLive = 3;
  @Input()
  public numberOfStoriesMorePopularClass = 4;

  ngOnInit (): void {
    this.moduleSet = this._addModules(this.moduleSet);
  }

  /**
   * Redirect user to the class clicked.
   * @param module_class
   */
  public goTo (module_class: string): void {
    console.log(module_class);
  }

  /**
   * Send data back to the father component(Learn) and it change the context of the carrousel.
   * @todo How to handle this communication between classModule - Learn - carrousel?
   * @param context
   */
  changeContext (context: number): void {
    if (context === 0) { // Lives
      console.log("Change carrossel to lives data");
    } else if (context = 1) { // More popular modules
      console.log("Change carrossel to more popular classes data ");
    }
  }

  /**
   * Add all modules to the Set module.
   * @param modules
   * @returns
   */
  private _addModules (modules: Set<Module>): Set<Module> {
    modules.add(new Module('Negociação do Ouro','10:00','../../../assets/images/classes/gold.jpeg'));
    modules.add(new Module('Papeis B3','30:00','../../../assets/images/classes/papel.jpeg'));
    modules.add(new Module('O que é selic?','25:00','../../../assets/images/classes/selic.jpeg'));
    modules.add(new Module('Tesouro Direto','20:00','../../../assets/images/classes/tesouro_direto.jpeg'));
    return modules;
  }

}
