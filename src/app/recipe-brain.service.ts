import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeBrainService {
  apiId: string = '4c88238c';
  apiKey: string = 'd0f24593bc472cc66c9aaaf866211215';
  apiQ: string = 'chicken';
  recipeSearchUrl: string = 'https://api.edamam.com/search';
  x: number = 0;
  z: number = 25;
  y: number = 25;

  constructor(private http: HttpClient) {}

  getInitialRecipes = (): any => {
    return this.http.get(this.recipeSearchUrl, {
      params: {
        //anytime we refer to a property of a class we must use this. to begin.
        app_id: this.apiId,
        app_key: this.apiKey,
        from: this.x.toString(),
        to: this.y.toString(),
        q: this.apiQ,
      },
    });
  };

  getNextRecipes = (): any => {
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: (this.x += this.z).toString(),
        to: (this.y += this.z).toString(),
        q: this.apiQ,
      },
    });
  };
  getPreviousRecipes = (): any => {
    return this.http.get(this.recipeSearchUrl, {
      params: {
        app_id: this.apiId,
        app_key: this.apiKey,
        from: (this.x -= this.z).toString(),
        to: (this.y -= this.z).toString(),
        q: this.apiQ,
      },
    });
  };
}
