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
  // @Input() z: number;
  constructor(private recipeService: RecipeBrainService) {}

  ngOnInit(): void {
    this.getInitialRecipes();
    // this.getInitialRecipes();
    // this.getAndSetFavorites();
    // this.getNextRecipes();
    // this.getPreviousRecipes();
  }

  selectOption = (id: number): void => {
    console.log(id);
    console.log(this.selected);
    this.updateRecipes();
    // this.getAndSetFavorites();
  };

  getInitialRecipes = () => {
    this.recipeService.y = this.selected;
    this.recipeService.getInitialRecipes().subscribe((response: any) => {
      this.recipeData = response;

      console.log(this.recipeData);
    });
  };

  updateRecipes = () => {
    // this.recipeService.y = this.selected;
    this.recipeService.z = this.selected;
    this.recipeService.updateRecipes().subscribe((response: any) => {
      // console.log(response);
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
