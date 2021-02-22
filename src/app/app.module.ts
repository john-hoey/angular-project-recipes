import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { FilterRecipesComponent } from './filter-recipes/filter-recipes.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRecipesComponent,
    FilterRecipesComponent,
    HomeComponent,
    FavoritesComponent,
    RecipeCardComponent,
    FourohfourComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
