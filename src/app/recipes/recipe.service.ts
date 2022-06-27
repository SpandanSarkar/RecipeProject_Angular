import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Alu-Chicken',
         'Bangladeshi Recipe',
         'https://i.pinimg.com/originals/ca/81/38/ca81386f65d7975f123b7b08de6f8427.jpg',
         [
          new Ingredient('Radhuni Mosla', 1),
          new Ingredient('Radhuni Holud', 1)
         ]),
        new Recipe('Sorisha Ilish', 
        'Bangladeshi Recipe',
        'https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-01-1024x683.jpg.webp',
        [
          new Ingredient('Sorisha Bata', 1),
          new Ingredient('Gorom Mososla', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}