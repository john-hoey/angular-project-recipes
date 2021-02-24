import { Component, Input, OnInit } from '@angular/core';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;
  recipeDataShown: any;
  favoriteRecipes: any[] = [];
  displayQtys: any[] = [
    { id: 10, name: '10' },
    { id: 25, name: '25 (default)' },
    { id: 50, name: '50' },
    { id: 100, name: '100' },
  ];
  selected: number = 25;

  IngredientCard: boolean = false;
  x: number = 0;
  y: number = 25;
  z: number = this.selected;
  constructor(private recipeService: RecipeBrainService) {}

  ngOnInit(): void {
    this.getInitialRecipes();
    //turned this back on cause we arent spamming the api calls now
    this.getAndSetFavorites();
  }

  selectOption = (id: number): void => {
    this.selected = id;
    this.updateRecipes();
  };

  getInitialRecipes = () => {
    this.recipeService.getInitialRecipes().subscribe((response: any) => {
      this.recipeData = response;
      this.recipeDataShown = this.recipeData.hits.filter(
        (recipe: any, idx: number) => idx < this.y
      );
      console.log(this.recipeData);
      console.log(this.recipeDataShown);
      console.log(this.recipeData.hits);
    });
  };

  updateRecipes = () => {
    this.recipeDataShown = this.recipeData.hits.filter(
      (recipe: any, idx: number) => idx < this.selected
    );
    this.x = 0;
    this.y = this.selected;
    this.z = this.selected;
    console.log(this.recipeDataShown);
  };

  getPreviousRecipes = () => {
    if (this.x >= 0) {
      let z: number = this.selected;
      let x = Number(this.x) - Number(z);
      let y = Number(this.y) - Number(z);
      this.recipeDataShown.length = 0;
      this.recipeDataShown = this.recipeData.hits.filter(
        (recipe: any, idx: number) => idx >= x && idx <= y
      );
      console.log(this.recipeDataShown);
      this.x = x;
      this.y = y;
      console.log(this.x);
      console.log(this.y);
    } else {
      alert('You are already on the first page!');
    }
  };

  getNextRecipes = () => {
    let z: number = this.selected;
    let x = Number(this.x) + Number(z);
    this.recipeDataShown.length = 0;
    if (this.y <= 100) {
      let y = Number(this.y) + Number(z);
      this.recipeDataShown = this.recipeData.hits.filter(
        (recipe: any, idx: number) => idx >= x && idx <= y
      );
      console.log(this.recipeDataShown);
      console.log(this.recipeData);

      this.x = x;
      this.y = y;
      console.log(this.x);
      console.log(this.y);
    } else {
      alert('You are already on the last page!');
    }
  };

  onSubmit = (searchTerm: string): void => {
    this.recipeService.z = 100;
    this.recipeService.searchRecipes(searchTerm).subscribe((response: any) => {
      this.recipeData = response;
      this.recipeService.z = this.z;
      this.recipeDataShown = this.recipeData.hits.filter(
        (recipe: any, idx: number) => idx < this.y
      );
      console.log(response);
      console.log(this.recipeDataShown);
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
