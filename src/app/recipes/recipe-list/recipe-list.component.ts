import { EventEmitter, Output } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Alu-Chicken', 'Bangladeshi Recipe','https://i.pinimg.com/originals/ca/81/38/ca81386f65d7975f123b7b08de6f8427.jpg'),
    new Recipe('Sorisha Ilish', 'Bangladeshi Recipe','https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-01-1024x683.jpg.webp')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
