import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteRecipes: any[] = [];
  recipeService: any;
  searchTerm: string = '';

  constructor(private recipeBrainServe: RecipeBrainService) {}

  ngOnInit(): void {
    this.getAndSetFavorite();
  }

  getAndSetFavorite = () => {
    this.favoriteRecipes = this.recipeBrainServe.getFavorites();
  };

  onFavorite = (recipe: any): void => {
    this.recipeBrainServe.toggleFavorite(recipe);
    this.getAndSetFavorite();
  };

  setSearchTerm = (term: string) => {
    this.searchTerm = term;
    console.log(term);
  };

  filterFavorites = (): any[] => {
    console.log(this.favoriteRecipes);
    return this.favoriteRecipes.filter((item) => {
      return item.recipe.label
        .toLowerCase()
        .trim()
        .includes(this.searchTerm.toLowerCase().trim());
    });
  };
}
