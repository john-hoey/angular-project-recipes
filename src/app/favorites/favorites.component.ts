import { Component, OnInit } from '@angular/core';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteRecipes: any[] = [];
  constructor(private recipeBrainServe: RecipeBrainService) {}

  ngOnInit(): void {
    this.getAndSetFavorite();
  }

  getAndSetFavorite = () => {
    this.favoriteRecipes = this.recipeBrainServe.getFavorites();
  };
}
