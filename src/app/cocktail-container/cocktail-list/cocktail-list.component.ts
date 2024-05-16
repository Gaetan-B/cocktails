import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  @Input()
  public cocktails: Cocktail[];

  @Input() 
  public selectedCocktail: Cocktail;

  @Output() 
  private changeCocktail: EventEmitter<number> = new EventEmitter;

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
    
  }
}
