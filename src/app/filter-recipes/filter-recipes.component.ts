import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'app-filter-recipes',
  templateUrl: './filter-recipes.component.html',
  styleUrls: ['./filter-recipes.component.css'],
})
export class FilterRecipesComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setSearchTerm = (form: NgForm) => {
    this.searchTerm.emit(form.form.value.term);
  };
}
