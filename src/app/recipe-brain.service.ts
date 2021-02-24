import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeBrainService {
  apiId: string = '4c88238c';
  apiKey: string = 'd0f24593bc472cc66c9aaaf866211215';
  apiQ: string = '';
  recipeSearchUrl: string = 'https://api.edamam.com/search';
  z: number = 25;

  favoriteRecipes: any[] = [];
  favoriteSearchTerm: any;

  constructor(private http: HttpClient) {}

  cusines: any = [
    'chinese',
    'indian',
    'mexican',
    'spanish',
    'caribbean',
    'american',
    'greek',
    'italian',
    'cajun',
    'thai',
    'zanzibari',
  ];

  randomNumber = (): number => {
    return Math.floor(Math.random() * this.cusines.length);
  };

  pickCuisine = (anArray: string): string => {
    return anArray[this.randomNumber()];
  };
  cuisine = this.pickCuisine(this.cusines);

  getInitialRecipes = (): any => {
    let apiQ: string = this.cuisine;
    return this.http.get(this.recipeSearchUrl, {
      params: {
        //anytime we refer to a property of a class we must use this. to begin.
        app_id: this.apiId,
        app_key: this.apiKey,
        from: '0',
        to: '100',
        q: apiQ,
      },
    });
  };

  searchRecipes = (searchTerm: string): any => {
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: '0',
        to: this.z.toString(),
        q: searchTerm,
      },
    });
  };

  toggleFavorite = (recipe: any): void => {
    let index = this.favoriteRecipes.findIndex((item) => {
      return item.recipe.label === recipe.recipe.label;
    });
    if (index === -1) {
      this.favoriteRecipes.push(recipe);
      console.log(this.favoriteRecipes);
    } else {
      this.favoriteRecipes.splice(index, 1);
      console.log(this.favoriteRecipes);
    }
  };

  getFavorites = (): any[] => {
    return this.favoriteRecipes;
  };
}
