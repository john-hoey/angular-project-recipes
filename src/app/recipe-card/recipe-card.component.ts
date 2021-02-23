import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<any>();

  @Input() recipeRef: any;
  @Input() favoritesRef!: any[];

  constructor() {}

  ngOnInit(): void {}

  emitToggleEvent = (recipe: any): void => {
    this.toggleEvent.emit(recipe);
  };

  checkFavorite = (recipe: any): boolean => {
    return this.favoritesRef.some((item) => {
      return item.recipe.label === recipe.recipe.label;
    });
  };
}
