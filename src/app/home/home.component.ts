import { Component, Input, OnInit } from '@angular/core';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;
  favoriteRecipes: any[] = [];
  displayQtys: any[] = [
    { id: 10, name: '10' },
    { id: 25, name: '25 (default)' },
    { id: 50, name: '50' },
    { id: 100, name: '100' },
  ];
  selected: number = 25;
  IngredientCard: boolean = false;
  constructor(private recipeService: RecipeBrainService) {}

  ngOnInit(): void {
    this.getInitialRecipes();

    // this.getAndSetFavorites();
  }

  selectOption = (id: number): void => {
    this.selected = id;
    this.updateRecipes();
  };

  getInitialRecipes = () => {
    this.recipeService.getInitialRecipes().subscribe((response: any) => {
      this.recipeData = response;

      console.log(this.recipeData);
      console.log(this.recipeService.z);
    });
  };

  updateRecipes = () => {
    this.recipeService.z = this.selected;
    this.recipeService.updateRecipes().subscribe((response: any) => {
      console.log(response);
      this.recipeData = response;
      console.log(this.recipeService.z);
    });
  };

  getPreviousRecipes = () => {
    if (
      this.recipeService.x >= 0 &&
      this.recipeService.y >= 0 &&
      this.recipeService.counter > 0
    ) {
      this.recipeService.getPreviousRecipes().subscribe((response: any) => {
        console.log(response);
        this.recipeData = response;
        this.updateRecipes();
      });
    } else {
      alert('You are already on the first page!');
    }
  };

  getNextRecipes = () => {
    if (this.recipeService.y < 100) {
      this.recipeService.getNextRecipes().subscribe((response: any) => {
        console.log(response);
        this.recipeData = response;
      });
    } else {
      alert('You are already on the last page!');
    }
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
