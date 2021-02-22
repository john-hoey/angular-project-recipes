import { Component, OnInit } from '@angular/core';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;
  favoriteRecipes: any[] = [];

  constructor(private recipeService: RecipeBrainService) {}

  ngOnInit(): void {
    this.getInitialRecipes();
    this.getAndSetFavorites();
    // this.getNextRecipes();
    // this.getPreviousRecipes();
  }

  getInitialRecipes = () => {
    this.recipeService.getInitialRecipes().subscribe((response: any) => {
      console.log(response);
      this.recipeData = response;

      console.log(this.recipeData);
    });
  };

  getNextRecipes = () => {
    this.recipeService.getNextRecipes().subscribe((response: any) => {
      console.log(response);
      this.recipeService = response;
    });
  };

  getPreviousRecipes = () => {
    this.recipeService.getPreviousRecipes().subscribe((response: any) => {
      console.log(response);
      this.recipeService = response;
    });
  };

  onSubmit = (searchTerm: string): void => {
    this.recipeService.searchRecipes(searchTerm).subscribe((response: any) => {
      this.recipeData = response;
      console.log(response);
    });
  };
  onFavorite = (recipe: any): void => {
    this.recipeService.toggleFavorite(recipe);
    this.getAndSetFavorites();
  };
  getAndSetFavorites = (): void => {
    this.favoriteRecipes = this.recipeService.getFavorites();
  };
}
