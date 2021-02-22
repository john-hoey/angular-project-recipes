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
  x: number = 0;
  z: number = 25;
  y: number = 25;

  cuisineType: string = '';

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
        from: this.x.toString(),
        to: this.y.toString(),
        q: apiQ,
      },
    });
  };

  getNextRecipes = (): any => {
    let apiQ: string = this.cuisine;
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: (this.x += this.z).toString(),
        to: (this.y += this.z).toString(),
        q: apiQ,
      },
    });
  };
  getPreviousRecipes = (): any => {
    let apiQ: string = this.cuisine;
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: (this.x -= this.z).toString(),
        to: (this.y -= this.z).toString(),
        q: apiQ,
      },
    });
  };

  searchRecipes = (searchTerm: string): any => {
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: (this.x += this.z).toString(),
        to: (this.y += this.z).toString(),
        q: searchTerm,
      },
    });
  };
}
