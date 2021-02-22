import { Component, OnInit } from '@angular/core';
import { RecipeBrainService } from '../recipe-brain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeData: any;

  constructor(private recipeService: RecipeBrainService) {}

  ngOnInit(): void {
    this.getInitialRecipes();
    this.getNextRecipes();
    this.getPreviousRecipes();
  }

  getInitialRecipes = () => {
    this.recipeService.getInitialRecipes().subscribe((response: any) => {
      console.log(response);
      this.recipeData = response;
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
}
